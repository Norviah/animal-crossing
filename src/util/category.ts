import { join } from 'path';

import { categories } from './categories';
import { directories } from './directories';
import { get } from './get';

/**
 * Returns an array containing the absolute paths of files in the category.
 * @param  name The name of the category.
 * @param  dir  The base directory of where to get the files from.
 * @return      An array with the absolute paths of the items in the category.
 */
export function files(name: keyof typeof categories, dir: string = directories.sanitized): string[] {
  return categories[name].map((file: string) => join(dir, `${file}.json`));
}

/**
 * Returns an array containing the data of every file in the category.
 * @param  name The name of the category.
 * @param  dir  The base directory of where to get the files from.
 * @return     An array with the data of every file from the category.
 */
export function category(name: keyof typeof categories, dir: string = directories.sanitized): obj[] {
  return get(files(name, dir));
}
