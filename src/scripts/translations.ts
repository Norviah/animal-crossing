import { writeFileSync } from 'fs';
import { camelCase, mapKeys } from 'lodash';
import { join } from 'path';

import { directories } from '../util/directories';
import { get } from '../util/get';

// This script combines all translations into a single file and tries to link
// translations to the items spreadsheet by applying the item's internal ID to
// the translation.

// In the translations spreadsheet, the 'READ ME' tab states that you can link
// translations to the item spreadsheet as the ID for translations is the
// internal ID on the item spreadsheet. The problem being that you can't
// directly link using IDs as translations has their IDs as a number or a
// string in the form of 'category_ID', with 'ID' being a 5 digit number, for
// example, if a translation's ID is 2, the ID will be 'category_00002'.

// From my experience, the translations with strings for IDs correctly link with
// the item spreadsheet, with the ID being the 5 digit number, but we can ignore
// the the translations with numbers as their ID as those have nothing to do
// with the item spreadsheet.

// So to correctly get the internal IDs, we have to do a couple of checks.
// First, if the ID is a number, ignore it completely. Next, we know that the ID
// is a string, so we have it match with the regex: /^.*_(\d{5}).*$/. This regex
// simply checks to see if the ID is in the proper form and has 5 digits. If the
// regex doesn't have any matches, we assume that the ID is correct as some
// items on the item spreadsheet has their internal ID as their filename, for
// example, villagers.

// Matches a string if it has 5 digits.
const idRegex: RegExp = /^.*_(\d{5}).*$/;

// Matches the ID for variations.
const variantRegex: RegExp = /.*_(\d+)$/;

// When manually trying to find IDs of translations, we'll ignore these tabs as
// they have internal IDs that are the same of other items, and we shouldn't get
// the IDs from these tabs as 'Recipes' have a property representing the ID of
// the item it represents, and achievements shouldn't/don't have translations.
const ignore: string[] = ['Recipes', 'Achievements'];

// Import all items from the AC: NH spreadsheet.
const items: obj[] = get(directories.raw);

const translations: obj[] = [];

/**
 * Searches for a match from the given string and, if a match is found, the
 * first group is returned in the form a Number. If a match isn't found, the
 * original string is returned instead.
 * @param  string The string to match.
 * @param  regex  The regex used to find a match.
 * @return        A
 */
function match(string: string | number, regex: RegExp) {
  if (typeof string === 'number') {
    return null;
  }

  // Find all matches in the given string.
  const matches: RegExpMatchArray | null = string.match(regex);

  return matches ? Number(matches[1]) : string;
}

for (let translation of get(directories.translations)) {
  // Map the keys to camelCase before continuing.
  translation = mapKeys(translation, (value: any, key: string): string => camelCase(key));

  // Some translations represent the plural form of an item, if that makes
  // sense, for example, there's a translation for the item 'earth egg' and
  // there's a translation for the item's plural form, 'earth eggs'. We
  // determine if a translation represents the plural form if the ID ends with
  // '_pl'.

  // As the ID can end with '_pl' only if it is a string, we set the property
  // outside of any checks to be consistent with all translations.
  translation.plural = false;

  const { id, variantId } = translation;

  // If the translation has an ID for the variation, grab it.
  translation.variantId = variantId ? match(variantId, variantRegex) : undefined;

  // If the translation's ID is a string, we know that the ID correctly links to
  // an internal ID of an entry in the item spreadsheet, so all we need to do is
  // get the 5 digits from the string, or, set the internal ID to the string.
  if (typeof id === 'string') {
    // Initialize an array containing the internal ID of the item it represents.
    translation.internalIds = [match(id, idRegex)];

    // Determine if the translation represents the plural form of the item.
    translation.plural = id.endsWith('_pl');
  }

  // If the ID is a number, we can't do anything with it so we must try to find
  // the internal ID of the item the translation represents manually.
  else {
    // Find all items that shares the same name with the translation.
    const matches: obj[] = items.filter(
      (item: any) => !ignore.includes(item.SourceSheet) && item.Name.toLowerCase() === translation.english.toLowerCase()
    );

    // Set the internal ID for the translation to the IDs of the items that were
    // matched. Some items may not have IDs so we'll use the item's filename.
    translation.internalIds = matches.map((item: any) => item['Internal ID'] ?? item['Filename']);
  }

  translations.push(translation);
}

writeFileSync(join(directories.sanitized, 'Translations.json'), JSON.stringify(translations, null, 2));
