import { omit } from 'lodash';

import { files, category } from '../util/category';
import { directories } from '../util/directories';
import { get } from '../util/get';
import { write } from '../util/write';

// Recipes have the property 'craftedItemInternalId', which represents the
// internal ID of the item that the recipe is for, we'll use this property to
// merge recipes into items.

const recipes: obj[] = category('Recipes', directories.sanitized);

for (const file of files('Items', directories.sanitized)) {
  const items: obj[] = get(file);

  for (const item of items) {
    // Remember that some items have variations, if they do, the internal
    // IDs are in the array, so we'll have to check for this as well.
    const id: number = (item.variations ? item.variations[0] : item).internalId;

    // Next, we'll try to find a recipe that shares the same ID as the item.
    let recipe: obj | null = recipes.find((recipe: obj) => recipe.craftedItemInternalId === id) ?? null;

    // Recipes have translations set for the item it represents, in addition to
    // having translations set for the base item, there will be two objects for
    // translations of the item, to save space and remove redundancy, we'll
    // remove translations of the item from the recipe object.
    recipe = recipe ? omit(recipe, ['translations']) : null;

    item.recipe = recipe;
  }

  write(file, items);
}
