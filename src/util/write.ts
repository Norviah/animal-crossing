import { writeFileSync } from 'fs';
import beautify from 'json-beautify';

/**
 * Sorts an array based off of the name of each element.
 */
function sort(a: any, b: any): number {
  return (a.name ?? a.english ?? a.event) > (b.name ?? b.english ?? b.event) ? 1 : -1;
}

/**
 * Writes the given data to the given path, using the beautify module.
 * @param path  The path to save the data to.
 * @param data  The data to save.
 * @param data  Represents the maximum fixed character width.
 */
export function write(path: string, data: obj[], width?: number): void {
  writeFileSync(path, beautify(data.sort(sort), (<unknown>null) as any[], 2, width ?? 80));
}
