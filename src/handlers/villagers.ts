import { join } from 'path';

import { category } from '../util/category';
import { directories } from '../util/directories';
import { separate } from '../util/separate';
import { write } from '../util/write';

// This script merges some values from villagers into an array, such as the
// villager's style and colors. In addition, the translations for the villager's
// name and catchphrase is set as well.

// Import every file from the villagers category.
const villagers: obj[] = category('Villagers', directories.sanitized);

// Import every item as well, we use this to find a villager's default clothing.
const items = category('Items', directories.raw);

for (const villager of villagers) {
  villager.styles = [villager.style1, villager.style2].filter((style) => !!style);
  villager.colors = [villager.color1, villager.color2].filter((color) => !!color);
  villager.furnitureNameList = separate(villager.furnitureNameList, ';');
  villager.furnitureList = separate(villager.furnitureList, ';');

  for (const key of ['style1', 'style2', 'color1', 'color2']) {
    delete villager[key];
  }

  const clothingInternalId = villager.defaultClothing;

  villager.defaultClothingInternalId = clothingInternalId;
  villager.defaultClothing = items.find((item) => item['Internal ID'] === clothingInternalId)?.Name ?? null;
}

write(join(directories.sanitized, `Villagers.json`), villagers);
