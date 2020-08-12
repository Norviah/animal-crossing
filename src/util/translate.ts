import { join } from 'path';
import { omit, zipObject } from 'lodash';

import { directories } from './directories';
import { get } from './get';

// Import every translation from the translations spreadsheet.
const translations: obj[] = get(join(directories.sanitized, 'Translations.json')).filter(
  (translation) => !translation.plural
);

// When trying to find translations for items, we'll ignore these tabs as they
// represent the translations for the variations and patterns of furnitures, not
// the actual furniture, in addition to having the same ID of the furniture. As
// it has the same IDs, we'll ignore these tabs so we don't accidentally set the
// translations from these tabs, rather than the tabs we want.
const ignore: string[] = ['Furniture Variants', 'Furniture Patterns'];

/**
 * Represents the unique values of a translation that represents the item.
 */
const uniqueValues: string[] = [
  'variantId',
  'id',
  'furnitureName',
  'internalIds',
  'sourceSheet',
  'version',
  'clothName',
];

/**
 * Finds a translation with the given name.
 * @param  name   The name to find a translation for.
 * @param  sheets Optional, represents sheets to only consider for translations.
 * @return        The translation for the name, or null if one can't be found.
 */
export function findTranslation(name: string, sheets?: string[]): obj | null {
  const translation = translations.find(
    (translation) => translation.english === name && (sheets ? sheets.includes(translation.sourceSheet) : true)
  );

  return translation ?? null;
}

/**
 * Finds a translation with the given name and removes unique values from it.
 * @param  name   The name to find a translation for.
 * @param  sheets Optional, represents sheets to only consider for translations.
 * @return        The translations for the name, with values that represent the
 * item, essentially, it only returns the object containing the translations.
 */
function findUniqueTranslation(name: string, sheets?: string[]): obj | null {
  const translation = findTranslation(name, sheets);

  return translation ? omit(translation, uniqueValues) : null;
}

/**
 * Sets the translations for the given item.
 * @param item The item to translate.
 */
function translate(item: obj): void {
  // We'll get the internal ID of the item, we can't literally use the
  // internalId property as the internalId for some items are completely
  // unrelated, so we'll get the specific ID for the item and use it to
  // find a translation for the item.

  // For example, for recipes, their internalId is completely unrelated, so
  // we'll use the 'craftedItemInternalId' property as that represents the item
  // that the recipe represents.
  const id = item.npcId ?? item.craftedItemInternalId ?? item.internalId ?? item.filename;

  // Find every translation for the given internal ID.
  const options = translations.filter((translation) => translation.internalIds.includes(id));

  let translation = options.find((translation) => !ignore.includes(translation.sourceSheet));

  // Translations for villagers are special as they have translations for their
  // name and catchphrase, each having the same ID (the villager's filename). So
  // we manually set the translation for each to be safe.
  if (item.sourceSheet === 'Villagers') {
    translation = options.find((translation) => translation.sourceSheet === 'Villagers');

    // Set the translation for the villager's catchphrase.
    item.catchphrases = options.find((translation) => translation.sourceSheet === 'Villagers Catch Phrase') ?? null;
  }

  // If the item has a variation, set the translation for the variation.
  if (item.hasOwnProperty('variation')) {
    let translation = translations.find((translation: any) => {
      // Make sure the translation is for variations, and that the translation
      // has the same name as the item's variation.
      if (!translation.sourceSheet.includes('Variants') && translation.english !== item.variation) {
        return;
      }

      // Apparently for clothing, the ID correctly matches the internal ID for
      // the item, so we'll use this property to determine if it's correct.
      if (item.hasOwnProperty('clothGroupId')) {
        return item.name === translation.clothName && item.internalId === translation.id;
      }

      // If the item is rather a furniture, we'll check to see if the
      // translation has the same name as the item.
      else if (translation.hasOwnProperty('furnitureName')) {
        return item.name === translation.furnitureName;
      }
    });

    // There are translations for variations, but, the translations are only for
    // furnitures or clothing, meaning that other items with variations, like
    // tools, won't have their variations set. So we'll have to manually find
    // translations from another variation with the same name.

    // Since we're getting a translation for a completely different item, we'll
    // have to find a translation and then remove the unique values from the
    // translation that represent that completely different item.

    if (!translation) {
      translation = translations.find(
        (translation: any) => translation.sourceSheet.includes('Variants') && translation.english === item.variation
      );

      // Remove any values from the translation that points to an item.
      translation = translation ? omit(translation, uniqueValues) : undefined;
    }

    // Some translations have 'null' as their name, so we must make sure that a
    // valid translation was found before setting it to the item.
    item.variantTranslations = translation?.english ? translation : null;
  }

  // And do the same for the item's pattern.
  if (item.hasOwnProperty('pattern')) {
    let translation = options.find((translation) => item.pattern === translation.english) ?? null;

    // If the item isn't a furniture, we'll remove the unique values from the
    // translations, as only furnitures have translations for patterns.
    if (translation && !['Housewares', 'Miscellaneous', 'Wall-mounted'].includes(item.sourceSheet)) {
      translation = translation ? omit(translation, uniqueValues) : null;
    }

    // Similar to variations, if we can't find a translation for the item's
    // pattern, it's most likely that the item isn't a furniture, as only
    // furnitures have translations for their pattern. So we'll try to
    // find a translation for this pattern from furnitures and then remove the
    // values that represent the furniture.
    else if (!translation) {
      translation = findUniqueTranslation(item.pattern, ['Furniture Patterns']);
    }

    // Some translations have 'null' as their name, so we must make sure that a
    // valid translation was found before setting it to the item.
    item.patternTranslations = translation?.english ? translation : null;
  }

  // Set translations for each theme of the item.
  if (item.hasOwnProperty('labelThemes')) {
    // As labelThemes is an array of themes, we'll initialize an array of
    // translations for each theme within the array.
    const trans = item.labelThemes.map((theme: string) => findTranslation(theme, ['Fashion Themes']));

    // Using lodash, we'll initialize an object containing the translations
    // for each theme with each theme as the key.
    item.themesTranslations = zipObject(item.labelThemes, trans);
  }

  // Set translations for the itme's series.
  if (item.hasOwnProperty('hhaSeries')) {
    item.seriesTranslations = item.hhaSeries ? findTranslation(item.hhaSeries, ['HHA Themes']) : null;
  }

  // Each recipe has an entry, 'craftedItemInternalId', which represents the
  // internal ID of the item the recipe represents. So we set the translations
  // of the recipe to the translation of that item.
  if (item.sourceSheet === 'Recipes') {
    translation = options.find((translation: any) => !ignore.includes(translation.sourceSheet));
  }

  // If we can't find a translation using the item's ID, we'll try to find one
  // in a brute-force like attempt by finding a translation with the same name.
  if (!translation) {
    translation = translations.find((translation: any) => translation.english === (item.name ?? item.event));
  }

  // If the item is an achievement just set it to undefined, as the IDs of
  // some achievements are the same of other items, and, from my experience,
  // achievements shouldn't/don't have any translations.
  if (item.sourceSheet === 'Achievements') {
    translation = undefined;
  }

  item.translations = translation ?? null;
}

export { translate };
