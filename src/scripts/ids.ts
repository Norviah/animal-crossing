import { join } from 'path';

import { directories } from '../util/directories';
import { get } from '../util/get';
import { write } from '../util/write';

// Every entry within the AC: NH spreadsheet has an internal ID and a unique ID,
// these IDs make it easier for one to update their database in case if an
// item's information has been updated. This script generates a JSON file with
// the IDs and other values of every item.

// Each entry will have the following format:
// name [string]: the item's name,
// id [string]: the internal ID of the item,
// uniqueID [string]: the item's uniqueID,
// sourceSheet [string]: represents the sheet that this item came from, and
// filename [string]: the filename of this item within the files of AC: NH.
// If an item doesn't have any of these values, null is then used.

const IDs: obj[] = [];

// Import every JSON file from the AC: NH spreadsheet.
const items: obj[] = get(directories.raw);

for (const item of items) {
  // The reason why || is used in lieu of ?? is due to ?? not treating an empty
  // string as a falsy value. For example, some items in the spreadsheet may be
  // missing/incomplete and have an empty string for a name, for the expression,
  // '' ?? null, '' is evaluated, if || was used, null would be returned.

  const name: string | null = item['Name'] || null;
  const uniqueID: string | null = item['Unique Entry ID'] || null;
  const id: number | null = item['Internal ID'] ?? null;
  const filename: string | null = item['Filename'] || null;
  const sourceSheet: string | null = item['SourceSheet'] || null;
  const variation: string | null = item['Variation'] === 'NA' ? undefined : item['Variation'];

  if (!name) {
    continue;
  }

  IDs.push({ name, uniqueID, id, filename, sourceSheet, variation });
}

write(join(directories.sanitized, 'IDs.json'), IDs);
