import { writeFileSync } from 'fs';
import beautify from 'json-beautify';

/**
 * Writes the given data to the given path, using the beautify module.
 * @param path  The path to save the data to.
 * @param data  The data to save.
 * @param data  Represents the maximum fixed character width.
 */
function write(path: string, data: any[], width?: number): void {
  writeFileSync(path, beautify(data, (<unknown>null) as any[], 2, width ?? 80));
}

export { write };
