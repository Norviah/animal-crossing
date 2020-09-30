import { join } from 'path';

import { categories } from '../util/categories';
import { files } from '../util/category';
import { directories } from '../util/directories';
import { get } from '../util/get';
import { readdir } from '../util/readdir';
import { width } from '../util/width';
import { write } from '../util/write';

// We'll initialize an array to have a reference to every file within the
// sanitized directory, we'll use this to determine and ensure that every file
// has been combined into a category.
let sanitized: string[] = readdir(directories.sanitized);

for (const category in categories) {
  // Here we initialize an array containing the tabs for the current category,
  // mapping each tab as an absolute path for the sanitized directory.
  const paths: string[] = files(category as keyof typeof categories, directories.sanitized);

  // Removes the current list of paths from the global reference.
  sanitized = sanitized.filter((file: string) => !paths.includes(file));

  // We have a list of absolute paths of the files for the current category,
  // next, we'll initialize a new array containing the contents of every path
  // and save it to a file under the name of the current category.
  write(join(directories.combined, `${category}.json`), get(paths), width(category));
}

// If the sanitized array has any files left, it represents that some files
// weren't combined into a category. This shouldn't happen as the category
// object should reference every possbile file, but if it does happen, the files
// that weren't accounted for are saved under 'Other'.
if (sanitized.length) {
  write(join(directories.combined, 'Other.json'), get(sanitized));
}
