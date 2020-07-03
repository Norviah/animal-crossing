import { files, category } from '../util/category';
import { directories } from '../util/directories';
import { get } from '../util/get';
import { write } from '../util/write';

// Each recipe has the property 'craftedItemInternalId', which represents the
// internal ID of the item the recipe represents, so we'll use that property to
// set recipes for items.

const recipes: obj[] = category('Recipes', directories.sanitized);

for (const file of files('Items', directories.sanitized)) {
  const items: obj[] = get(file);

  for (const item of items) {
    // Remember that some items have variations, and if they do, the internal
    // IDs are in the array, so we'll have to check for this possibility.
    const id: number = item.internalId ?? item.variations[0].internalId;

    // Try to find the recipe for this item.
    const recipe: obj | undefined = recipes.find((recipe: any) => recipe.craftedItemInternalId === id);

    item.recipe = recipe ?? null;
  }

  write(file, items);
}
