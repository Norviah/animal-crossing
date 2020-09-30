import { camelCase, mapKeys } from 'lodash';
import { join } from 'path';

import { directories } from '../util/directories';
import { get } from '../util/get';
import { write } from '../util/write';

// This scripts reads and combines all translations into a single file and edits
// the IDs of some translations to a number over a string when possible.

const translations: obj[] = [];

for (let translation of get(directories.translations)) {
  // Map the keys to camelCase before continuing.
  translation = mapKeys(translation, (value: any, key: string): string => camelCase(key));

  // Some translations represents the plural form of an item, if so, the ID will
  // end in '_pl'. We'll instead have a property to determine this, so we'll set
  // it initially to false, so every translation has this property.
  translation.plural = false;

  if (typeof translation.id === 'string') {
    // If the ID of the translation is a string, we have to do multiple things,
    // first, we'll determine if the translation is for the plural variation of
    // the item, we can determine this by checking if the ID ends with '_pl'.
    translation.plural = translation.id.endsWith('_pl');

    // If so, we'll have a property determine if the translation is for the
    // plural variation and we'll remove the '_pl' from the ID.
    translation.id = translation.id.replace(/_pl$/, '');

    // Next, we'll change the ID a bit, some translations have their ID in a
    // format similar to '[name]_[5 digit number]', with the ending numbers
    // representing the internal ID of the translation. If the ID is in this
    // format, we'll remove everything other than the ending numbers.
    if (/^.*_(\d{5}).*$/.test(translation.id)) {
      translation.id = Number(/^.*_(\d{5}).*$/.exec(translation.id)![1]);
    }
  }

  // Similar to the translation's ID, if the translation is for a
  // variation/pattern of an item, we'll edit it's ID. IDs for
  // variations/patterns are in the format of
  // '[category]_[internal id]_[id of variation]', so we'll extract the
  // ending numbers that represent the ID of the variation/pattern.

  // If the translation is for one of a clothing item, the ID will be in the
  // format of '[cloth group]_[internal id]_[id of variation]', cloth group
  // represents the ID of the ID of a group of the same clothing item, with the
  // variation id changing for each variation, so we'll split these values into
  // their own property.

  if (typeof translation.variantId === 'string') {
    // As the cloth group depends on the translation's variantId, we'll set this
    // property before changing the translation's variantId.
    translation.clothGroup = Number(/^(\d+)_.*$|^.*_(\d+)$/.exec(translation.variantId)![1]) || undefined;

    translation.variantId = Number(/^.*_(\d+)$/.exec(translation.variantId)![1]);
  }

  translations.push(translation);
}

write(join(directories.sanitized, 'Translations.json'), translations);
