import { join } from 'path';
import { omit, zipObject } from 'lodash';

import { directories } from './directories';
import { get } from './get';

// When looking for translations, we'll ignore these tabs as the internal IDs
// for these items either are the same IDs for other items, or, have another
// property that properly represents the ID.
const ignore: string[] = ['Recipes', 'Achievements', 'Variants', 'Patterns'];

// Represents the values from a translation object that relates to an item,
// essentially the list of every keys other than the actual translations.
const uniqueValues: string[] = [
  'variantId',
  'id',
  'furnitureName',
  'internalIds',
  'sourceSheet',
  'version',
  'clothName',
  'clothGroup',
  'plural',
];

const translations: obj[] = get(join(directories.sanitized, 'Translations.json')).filter(
  (translation) => !translation.plural || !ignore.includes(translation.sourceSheet)
);

/**
 * Finds a translation with the given name.
 * @param  name   The name to find a translation for.
 * @param  sheets Optional, represents sheets to only consider for translations.
 * @return        The translation for the name, or null if one can't be found.
 */
export function find(name: string, sheets?: string[] | string): obj | null {
  const translation: obj | undefined = translations.find((translation: obj) => {
    // If the translation doesn't share the same name for the item we're looking
    // for, we'll continue to the next iteration.
    if (translation.english.toString().toLowerCase() !== name.toLowerCase()) {
      return;
    }

    const source: string = translation.sourceSheet;

    // Next, if the parameter 'sheets' is given, it could either be an array or
    // a string. If it's a string, we'll check to see if the translation's
    // source sheet contains the paramter, if an array is given, we'll check if
    // the array has the translation's source sheet as an element.
    if (sheets && (typeof sheets === 'string' ? source.includes(sheets) : sheets.includes(source))) {
      return true;
    }

    return true;
  });

  return translation ?? null;
}

/**
 * Sets the translations for the given item.
 * @param item The item to translate.
 */
export function translate(item: obj): void {
  // We'll get the internal ID of the item, we can't literally use the
  // internalId property as the internalId for some items are completely
  // unrelated, so we'll get the specific ID for the item and use it to
  // find a translation for the item.

  // For example, for recipes, their internalId is completely unrelated, so
  // we'll use the 'craftedItemInternalId' property as that represents the item
  // that the recipe represents.
  const id: string = item.npcId ?? item.craftedItemInternalId ?? item.clothGroupId ?? item.internalId ?? item.filename;

  // We'll initialize an array containing every translation that shares the same
  // internal ID as the given item.
  const options: obj[] = translations.filter((translation) => (translation.clothGroup ?? translation.id) === id);

  // Before we try finding a translation, we'll check to see if every
  // translation in the array relates to the same item, as the internal IDs for
  // some categories may still mix with the IDs for other categories.
  const identical: boolean = options.every((translation) => translation.english === options[0].english);

  let translation: obj | undefined = options.find((translation) => {
    // This check ensures that the translation isn't from a unwanted tab.
    if (ignore.every((tab) => translation.sourceSheet.includes(tab))) {
      return;
    }

    // Here is where knowing if every translation relates to the same item is
    // important, as if it's true, we'll simply return the first reanslation
    // that isn't from an unwanted tab. If the opposite is true, meaning that
    // the array has translations for atleast two different items, we'll ensure
    // that the translation is for the item by checking the item's name.
    return identical ? true : translation.english.toString().toLowerCase() === (item.name ?? item.event)?.toLowerCase();
  });

  // Translations for villagers are a special case, as they have translations
  // for their name and their catchphrase, each sharing the same ID, that being
  // the villager's filename. So we'll manually set both just to be safe.
  if (item.sourceSheet === 'Villagers') {
    // As we have both options in the initialized array, we don't need to
    // research through every translations again, we just need to find the
    // translation with the correct source sheet name.
    translation = options.find((translation) => translation.sourceSheet === 'Villagers');

    item.catchphrases = options.find((translation) => translation.sourceSheet === 'Villagers Catch Phrase') ?? null;
  }

  // If the item has a variation, we'll try to find translations for it.
  if (item.variation) {
    // Every item with variations shares the same cloth group ID, which
    // represents the item itself, with the internal ID representing the
    // variation itself. Since we have an array containing the translations for
    // every variation of the item and the item itself, we'll simply find the
    // translation for the variation.
    item.variantTranslations = options.find((translation) => translation.english === item.variation) ?? null;

    // Some items don't have a specific translation for their variation, so
    // we'll simply grab a translation for the same variation of another item
    // and we'll remove the values that relate to the item that we got it from.
    if (!item.variantTranslations) {
      const translation: obj | null = find(item.variation, 'Variants');

      // Remove any values from the translation that points to an item.
      item.variantTranslations = translation ? omit(translation, uniqueValues) : null;
    }
  }

  // We'll do the same if it has a pattern as well.
  if (item.pattern) {
    // Similar to variations, (most) translations for patterns have the same ID
    // as the item, so the array will be a container of every translation with
    // the same ID, so in order to find the translation for the pattern, we'll
    // look for one by checking the English translation of every translation.
    item.patternTranslations = options.find((translation) => translation.english === item.pattern) ?? null;

    // Again, similar to variations, some items don't have a translation for
    // specific pattern available from the translations spreadsheet, so we'll
    // find and use a translation for the same pattern from another item.
    if (!item.patternTranslations) {
      const translation: obj | null = find(item.pattern);

      // Remove any values from the translation that points to an item.
      item.patternTranslations = translation ? omit(translation, uniqueValues) : null;
    }
  }

  // if the item is an accessory, it'll have an array for representing the
  // themes of the item, so we'll initialize an array consisting of the
  // translations for each theme, if one exists.
  if (item.labelThemes) {
    const array: (string | null)[] = item.labelThemes.map((theme: string) => find(theme, ['Fashion Themes']));

    // Using lodash, we'll initialize an object containing the translations
    // for each theme with each theme as the key.
    item.themesTranslations = zipObject(item.labelThemes, array);
  }

  // We'll also set the translations for the item's hha series, if one exists.
  if (item.hhaSeries) {
    item.seriesTranslations = find(item.hhaSeries, ['HHA Themes']);
  }

  // If the item is instead a reaction, we'll have to manually find one as in
  // the item spreadsheet, reactions don't have IDs, and in the translations
  // spreadsheet, their ID is either the English translation or a variation of
  // it. In order to find a translation, we'll simply search for a translation
  // that shares the same English name and is in the 'Reactions' tab.
  if (item.sourceSheet === 'Reactions') {
    translation = find(item.name, ['Reactions']) ?? undefined;
  }

  // If we can't find a translation using the item's ID, we'll try to find one
  // in a brute-force like attempt by finding a translation with the same name.
  if (!translation) {
    translation = translations.find((translation: any) => translation.english === (item.name ?? item.event));
  }

  // The set of IDs for achievements have same entries for IDs of other tabs,
  // i.e. an ID of a certain item could also be an ID of a certain achievement,
  // in addition, translations for achievements aren't available in the
  // translations spreadsheet, so we'll set it to undefined.
  if (item.sourceSheet === 'Achievements') {
    translation = undefined;
  }

  item.translations = translation ?? null;
}
