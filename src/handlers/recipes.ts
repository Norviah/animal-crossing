import { join } from 'path';
import { zipObject } from 'lodash';

import { category } from '../util/category';
import { directories } from '../util/directories';
import { write } from '../util/write';
import { find } from '../util/translate';
import { width } from '../util/width';

// Obviously, there are craftiable items in Animal Crossing, with each recipe
// having a maximum amount of six materials, I'm assuming. On the spreadsheet,
// each recipe has an entry for these recipes, regardless of if the recipe uses
// all six materials.

// This script combines these entries so it's an object representing the names
// of the materials uses with the amount needed.

// Contains the keys that represents the amount needed of each material.
const count: string[] = ['1', '2', '3', '4', '5', '6'];

// Contains the keys that represents the names of each material.
const materials: string[] = count.map((number: string) => `material${number}`);

const recipes: obj[] = category('Recipes', directories.sanitized);

for (const recipe of recipes) {
  // Get the names of the materials that the recipes needs, remember that the
  // spreadsheet has entries for all six materials, regardless if all six
  // materials are used, so the unusued materials need to be filtered out.
  const names: string[] = materials.map((key: string) => recipe[key]).filter((element: string) => !!element);

  // We do the same for the amount of materials needed.
  const amount: string[] = count.map((key: string) => recipe[key]).filter((element: string) => !!element);

  // We have an array containing the names of the needed materials and an array
  // containing the amount of each needed materials, we use lodash to initialize
  // an object with the names as the key and the amount as the value.
  recipe.materials = zipObject(names, amount);

  for (const key of [...count, ...materials]) {
    delete recipe[key];
  }

  // Find translations for each material,
  const translations: (obj | null)[] = names.map((name: string) => find(name));

  // and use lodash to initialize an object containing translations for
  // materials, with the names as keys.
  recipe.materialsTranslations = zipObject(names, translations);
}

write(join(directories.sanitized, 'Recipes.json'), recipes, width('Recipes'));
