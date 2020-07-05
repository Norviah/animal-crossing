import { categories } from './categories';

/**
 * A list of character width for specific categories.
 */
const characterWidth: { [key: string]: number } = {
  Creatures: 120,
  Villagers: 120,
};

/**
 * Tries to find a category based off of the file name.
 * @param  filename The file name to find the category of.
 * @return          The category of the file name, if one is found.
 */
function find(filename: string): string | undefined {
  for (const key in categories) {
    if (categories[key as keyof typeof categories].includes(filename)) return key;
  }

  return undefined;
}

/**
 * Returns the character width for the given category.
 * @param  key The key to get the character width of.
 * @return     The character width for the key.
 */
function width(key: string): number | undefined {
  // If the given key is a category, return it's entry within the object.
  if (categories.hasOwnProperty(key)) {
    return characterWidth[key];
  }

  // If not, then the key is a file name, so we'll try to find a category based
  // off of the filename.
  const category: string | undefined = find(key.split('.')[0]);

  return category ? characterWidth[category] : undefined;
}

export { width };
