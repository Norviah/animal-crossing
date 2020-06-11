import { writeFileSync } from 'fs';
import { join } from 'path';

import { categories } from '../util/categories';
import { files } from '../util/category';
import { directories } from '../util/directories';
import { get, readdir } from '../util/get';

// Initialize an array to reference the files in the sanitized directory, this
// will determine if a file hasn't been combined into a category.
let sanitized: string[] = readdir(directories.sanitized);

for (const category in categories) {
  // Map each file from the category to an absolute path.
  const paths: string[] = files(category as keyof typeof categories, directories.sanitized);

  // Remove the current list from the array.
  sanitized = sanitized.filter((file: string) => !paths.includes(file));

  writeFileSync(join(directories.combined, `${category}.json`), JSON.stringify(get(paths), null, 2));
}

// If the sanitized array has any files left, it represents that some files
// weren't combined into a category. This shouldn't happen as the category
// object should reference every possbile file, but if it does happen, the files
// that weren't accounted for are saved under 'Other'.
if (sanitized.length) {
  writeFileSync(join(directories.combined, `$Other.json`), JSON.stringify(get(sanitized), null, 2));
}
