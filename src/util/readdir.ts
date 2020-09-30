import { readdirSync } from 'fs';
import { join } from 'path';

/**
 * Returns an array containing the absolute path of every file in the directory.
 * @param  path The path to read JSON files from.
 * @return      An array with absolute paths for JSON files in the directory.
 */
export function readdir(path: string): string[] {
  return readdirSync(path).map((file: string) => join(path, file));
}
