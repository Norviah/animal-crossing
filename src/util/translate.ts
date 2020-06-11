import { join } from 'path';

import { directories } from './directories';
import { get } from './get';

// Import every translation from the translation spreadsheet.
const translations: obj[] = get(join(directories.sanitized, 'Translations.json'));

/**
 * Sets the translations for the given item.
 * @param item The item to translate.
 */
function translate(item: obj): void {
  // We can't only use the internal ID of the item as the ID as both the
  // translations and item spreadsheet uses filenames for IDs for some items.
  const ids: string[] | (number | string)[] = [item.internalId, item.filename?.toLowerCase()];

  let translation = translations.find((translation) => translation.internalIds.some((id: any) => ids.includes(id)));

  // If we can't find a translation using the item's ID, we'll try to find one
  // in a brute-force like attempt by finding a translation with the same name.
  if (!translation) {
    // Similar to the list of IDs, we can't use the item's name as it's name as
    // the season's spreadsheet lists the name under the property 'event'.
    const names = [item.name?.toLowerCase(), item.event?.toLowerCase()];

    translation = translations.find((translation: any) => names.includes(translation.english.toLowerCase()));
  }

  // Translations for villagers are unique as villagers have translations for
  // their name and their catchphrase, so we must manually set them to be safe.
  if (item.sourceSheet === 'Villagers') {
    // Initialize an array containing the translation for the villager's name
    // and the catchphrase, as both have their IDs as the filename it's simple.
    const options = translations.filter((translation) => translation.internalIds.includes(item.filename));

    // Now set the villager's translation to the one for their name.
    translation = options.find((option: any) => option.sourceSheet === 'Villagers');

    // And set the translation for their catchphrase.
    item.catchphrases = options.find((option: any) => option.sourceSheet === 'Villagers Catch Phrase') ?? null;
  }

  // If the item is a recipe check that the name of the item and translation are
  // the same, as the IDs aren't 100% linked correctly so a recipe might get a
  // translation from a completely different item. We do the same for
  // achievements, as, in my experience they don't have any translations.
  if (item.sourceSheet === 'Recipes' || item.sourceSheet === 'Achievements') {
    if (translation?.english.toLowerCase() !== item.name.toLowerCase()) translation = undefined;
  }

  item.translations = translation ?? null;
}

export { translate };
