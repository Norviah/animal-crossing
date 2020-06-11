import { statSync, readdirSync } from 'fs';
import { join, isAbsolute } from 'path';

/**
 * Determines if the path is a file.
 * @param  path The path to check.
 * @return      Represents if the given path is a file.
 */
function isFile(path: string): boolean {
  return statSync(path).isFile();
}

/**
 * A helper for the get function. This function is called on every element in
 * the array of paths, it imports the current file and initializes and returns
 * an array consisting of the array from the last loop and the file.
 * @param  array Contains the files from the past loops.
 * @param  file  The file to import.
 * @return       An array containing the elements of the file and the file.
 */
function loop(array: obj[], file: string): obj[] {
  return [...array, ...require(file)];
}

/**
 * Returns an array containing the paths of every file in the directory.
 * @param  path The path to read JSON files from.
 * @return      An array with absolute paths for JSON files in the directory.
 */
function readdir(path: string): string[] {
  return readdirSync(path).map((file: string) => join(path, file));
}

/**
 * Imports every path in the array, or just the path if a string is given, into
 * an array and returns it. If a directory is given instead, every file in that
 * directory is imported into an array and is returned.
 * @param  path The path, or directory, to import.
 * @return      An array containing the contents of the path.
 */
function get(path: string[] | string): obj[] {
  // Make sure that the given path is in absolute form.
  if (typeof path === 'string' ? !isAbsolute(path) : !path.every((file: string) => isAbsolute(file))) {
    throw new Error(`'${path}' must be an absolute path.`);
  }

  let files: string[];

  // If the path is a file we set the string to be an instance of an array, if a
  // directory is given, get every JSON file from that directory.
  if (typeof path === 'string') {
    files = isFile(path) ? [path] : readdir(path);
  } else files = path;

  return files.reduce(loop, []);
}

export { get, readdir };
