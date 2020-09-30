import { statSync } from 'fs';
import { readdir } from './readdir';

/**
 * Determines if the given path is a file.
 * @param  path The path to check.
 * @return      Represents if the given path is a file.
 */
function isFile(path: string): boolean {
  return statSync(path).isFile();
}

/**
 * A helper for the get function, this function is called on every element in
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
 * Imports every path in the array, or just the path if a string is given, into
 * an array and returns the result. If a directory is given instead, every file
 * in that directory is imported into an array and is returned.
 * @param  path The path, or directory, to import.
 * @return      An array containing the contents of the given path.
 */
export function get(path: string[] | string): obj[] {
  let files: string[];

  // If the path is a string, we'll determine if the path is either a file or a
  // directory. If it's a file, we'll initialize an array with it as the only
  // element, if not, we'll initialize an array containing the files in the dir.
  if (typeof path === 'string') {
    files = isFile(path) ? [path] : readdir(path);
  }

  // If the path is an array instead, we'll just set the variable to the param.
  else {
    files = path;
  }

  return files.reduce(loop, []);
}
