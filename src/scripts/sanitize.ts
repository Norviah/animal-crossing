import { camelCase, flatten, omit, pick, zipObject } from 'lodash';
import { basename, join } from 'path';

import { directories } from '../util/directories';
import { get, readdir } from '../util/get';
import { link } from '../util/link';
import { separate } from '../util/separate';
import { translate } from '../util/translate';
import { width } from '../util/width';
import { write } from '../util/write';

// After converting the spreadsheets into JSON, the keys and values won't
// necessarily be in compliant of JavaScript syntax. For every item, the keys
// are changed into camelCase using lodash.

// In addition, the values, when possible, are replaced with JavaScript values,
// or values that I personally prefer, which is represented by the following
// object.

const replace: obj = {
  Yes: true,
  No: false,
  None: null,
  NA: null,
  NFS: -1,
  Unlimited: -1,
  '': null,
  '—': null,
  'No lighting': null,
  'Not in catalog': null,
  'Does not play music': null,
};

// Additionally, variations of items are combined into an array. In AC, some
// items obviously have variations, which are available on the spreadsheets,
// but, each variation has its own separate table with repeating values such as
// the item's name and price.

// Variations are combined into an array by collecting every variation of an
// item and removing the values that repeat, which is represented by the
// following array.

const duplicateValues: string[] = [
  'sourceSheet',
  'name',
  'diy',
  'patternCustomize',
  'kitCost',
  'size',
  'milesPrice',
  'sourceNotes',
  'versionAdded',
  'versionUnlocked',
  'interact',
  'tag',
  'outdoor',
  'speakerType',
  'lightingType',
  'catalog',
  'set',
  'series',
  'bodyTitle',
  'bodyCustomize',
  'buy',
  'sell',
  'customize',
  'translations',
  'labelThemes',
  'source',
  'style1',
  'style2',
  'hhaSeries',
  'hhaSet',
  'themesTranslations',
  'seriesTranslations',
  'hhaBasePoints',
  'primaryShape',
  'secondaryShape',
  'villagerEquippable',
  'seasonalAvailability',
  'type',
];

// Some items in the various spreadsheets have multiple values for them, for
// example, the themes of an item. For each value, it's separated with a ';',
// so for each key in this array, we'll split each value via a ';'.
const separateValues: string[] = [
  'tier1Noun',
  'tier2Noun',
  'tier3Noun',
  'tier4Noun',
  'tier5Noun',
  'tier6Noun',
  'labelThemes',
  'source',
  'fog',
  'specialClouds',
  'description',
  'catchPhrase',
];

// This array contains the absolute paths of the files that we'll sanitize,
// which are the JSON files from the AC: NH and seasons spreadsheet.
const files: string[] = flatten([readdir(directories.raw), readdir(directories.seasons)]);

for (const file of files) {
  const items: obj[] = get(file);

  // The names of every item that has a variation will be added to this set. A
  // set is used in lieu of an array as sets don't keep duplicate values. We
  // determine if an item has variations by checking to see if the 'variation'
  // property evaluates to a truthy value, as some items do have this property
  // but the item itself may possibly not have any variations.
  const variationNames: Set<string> = new Set();

  // Once each item is sanitized, it will be stored in this array.
  let sanitized: obj[] = [];

  // This array will hold the items that have variations.
  const variations: obj[] = [];

  for (const item of items) {
    // Map each key into camelCase, we check if the original key is '#' before
    // calling camelCase as camelCase changes this value to an empty string.
    const keys: string[] = Object.keys(item).map((key: string) => (key === '#' ? 'num' : camelCase(key)));

    // Grab links from the values if a link exists.
    let values: any[] = Object.values(item).map((value: any) => link(value));

    // As stated above, replace certain values with JavaScript syntax.
    values = values.map((value) => (replace.hasOwnProperty(value) ? replace[value] : value));

    // zipObject takes two arrays and initializes a new object, the first array
    // represents the keys of the object and the second represents the values.
    const object = zipObject(keys, values);

    // Separate specific values from the object.
    for (const value of separateValues) {
      if (object[value]) object[value] = separate(object[value], ';');
    }

    // Set the item's translation, if one can be found.
    translate(object);

    sanitized.push(object);

    if (object.variation || object.pattern) {
      variationNames.add(object.name);
    }
  }

  // After we sanitize the items, we handle variations.
  for (const name of variationNames) {
    // Initialize an array containing every item with the same name.
    const duplicates: obj[] = sanitized.filter((item: any) => item.name === name);

    // Every variation has values that repeat with every entry, such as the
    // item's name or price. We remove those values from every variation.
    const values: obj[] = duplicates.map((item: any) => omit(item, duplicateValues));

    // Using the same values, we initialize a new object which represents the
    // base of the item, for a lack of better words. The base consists of the
    // values that repeat with every variation, so we only have one instance.
    const base = pick(duplicates[0], duplicateValues);

    variations.push({ ...base, variations: values });
  }

  // Once we have handled variations, we filter out all of those items from the
  // 'sanitized' array, as those items are stored in the 'variations' set.
  sanitized = sanitized.filter((item: any) => !variationNames.has(item.name));

  write(join(directories.sanitized, basename(file)), [...sanitized, ...variations], width(basename(file)));
}
