import { sheets } from '@norviah/sheets';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

import { directories } from './util/directories';
import { readdir } from './util/readdir';
import { spreadsheets } from './util/spreadsheets';

async function main(): Promise<void> {
  // Make sure that the directories used throughout this project exists.
  for (const directory of Object.values(directories)) {
    if (!existsSync(directory)) mkdirSync(directory, { recursive: true });
  }

  // Convert and download each spreadsheet as a JSON file, which is saved under
  // the sub-directory 'json' in the project's root directory.
  await sheets(spreadsheets, { verbose: true });

  // Once the spreadsheets are downloaded, we'll edit and change the data a bit
  // in order to make it much easier for someone to work with it. First off,
  // we'll create a new file combining every translation into a single file.
  await import('./scripts/translations');

  // Once all the translations are combined, we'll sanitize each JSON file
  // downloaded from the various spreadsheets. This script sanitizes each
  // category in a way that is non-specific, i.e. setting translations and
  // changing each key into camelCase for simple access.
  await import('./scripts/sanitize');

  // Each script in the 'handlers' sub-directory sanitizes each file in a way
  // that is specific to that file or category it represents.
  const handlers: string[] = readdir(join(__dirname, 'handlers'));

  for (const handler of handlers) {
    await import(handler);
  }

  // Merges items with recipes.
  await import('./scripts/recipes');

  // Combines every JSON file via categories.
  await import('./scripts/combine');
}

main();
