import { writeFileSync } from 'fs';

import { get } from '../util/get';
import { files } from '../util/category';

// This script combines values of items into an array and sets the trnaslations.

// Represents the keys to delete from items after we joined values.
const keys: string[] = [
  'style',
  'color1',
  'color2',
  'hhaConcept1',
  'hhaConcept2',
  'hhaSet',
  'hhaSeries',
  'labelThemes',
  'source',
];

/**
 * Sanitizes values from the object.
 * @param object The given object.
 */
function sanitize(object: obj): void {
  if (object.hasOwnProperty('color1')) {
    object.colors = [object.color1, object.color2].filter((color) => !!color);
  }

  if (object.hasOwnProperty('hhaConcept1')) {
    object.concepts = [object.hhaConcept1, object.hhaConcept2].filter((concept) => !!concept);
  }

  if (object.hasOwnProperty('hhaSet')) {
    object.set = object.hhaSet;
  }

  if (object.hasOwnProperty('hhaSeries')) {
    object.series = object.hhaSeries;
  }

  if (object.hasOwnProperty('style')) {
    object.styles = object.style.split('/; /g');
  }

  if (object.hasOwnProperty('source')) {
    object.sources = object.source;
  }

  if (object.hasOwnProperty('labelThemes')) {
    object.themes = object.labelThemes;
  }

  for (const key of keys) {
    delete object[key];
  }
}

for (const file of files('Items')) {
  const items: obj[] = get(file);

  for (const item of items) {
    // We check if the item has variations as if the item has variations, the
    // information we want to edit are the objects in the variations array.
    if (item.variations) {
      for (const variation of item.variations) sanitize(variation);
    }

    // If the object has no variations, simply edit the object itself.
    else sanitize(item);
  }

  writeFileSync(file, JSON.stringify(items, null, 2));
}
