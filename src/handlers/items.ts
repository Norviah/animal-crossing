import { get } from '../util/get';
import { files } from '../util/category';
import { write } from '../util/write';
import { width } from '../util/width';

// This script combines values of items into an array and sets the translations.

// Represents the keys to delete from items after we joined values.
const keys: string[] = [
  'style1',
  'style2',
  'color1',
  'color2',
  'hhaConcept1',
  'hhaConcept2',
  'hhaSet',
  'hhaSeries',
  'labelThemes',
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

  if (object.hasOwnProperty('style1')) {
    object.styles = [object.style1, object.style2].filter((style) => !!style);
  }

  if (object.hasOwnProperty('labelThemes')) {
    object.themes = object.labelThemes;
  }

  for (const key of keys) {
    if (object.hasOwnProperty(key)) delete object[key];
  }
}

for (const file of files('Items')) {
  const items: obj[] = get(file);

  for (const item of items) {
    // We check if the item has variations as some of the information we want to
    // edit are on the objects within the variations array.
    if (item.variations) {
      for (const variation of item.variations) sanitize(variation);
    }

    // We call the function on the item itself as well as some information we
    // want to edit aren't dynamic for each variation, so it's available on the
    // item itself.
    sanitize(item);
  }

  write(file, items, width('Items'));
}
