import { sheets } from '@norviah/sheets';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

import { directories } from './util/directories';
import { readdir } from './util/get';
import { spreadsheets } from './util/spreadsheets';

async function main(): Promise<void> {
  // Make sure that the directories used throughout this project exists.
  for (const directory of Object.values(directories)) {
    if (!existsSync(directory)) mkdirSync(directory, { recursive: true });
  }

  // Convert each spreadsheet into JSON, the files are saved under the
  // sub-directory 'raw' under the project's root directory, it's considered
  // raw as the files are straight from the spreadsheets.
  await sheets(spreadsheets, { verbose: true });

  // Generate a JSON file containing the IDs for all items.
  await import('./scripts/ids');

  // Combine every translation into a single file.
  await import('./scripts/translations');

  // Sanitize the JSON files generated from the spreadsheets. This script
  // sanitizes the files in blanket style, meaning it sanitizes the items in a
  // way that is non-specific to a certain file or category.
  await import('./scripts/sanitize');

  // Each script in the 'handlers' sub-directory sanitizes each file in a way
  // that is specific to that file or category it represents.
  const handlers: string[] = readdir(join(__dirname, 'handlers'));

  for (const handler of handlers) {
    await import(handler);
  }

  // Combine every file via categories.
  await import('./scripts/combine');
}

main();
