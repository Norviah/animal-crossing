import { path } from 'app-root-path';
import { join } from 'path';

/**
 * The absolute path for this project's root directory.
 */
const root: string = path;

/**
 * The absolute path for the project's source code.
 */
const src: string = join(path, 'src');

/**
 * The root directory that holds the raw data from the spreadsheets.
 */
const rawRoot: string = join(root, 'raw');

/**
 * The sub-directory that holds the AC: NH spreadsheet.
 */
const raw: string = join(rawRoot, 'data');

/**
 * The sub-directory that holds the translations spreadsheet.
 */
const translations: string = join(rawRoot, 'translations');

/**
 * The sub-directory that holds the seasons spreadsheet.
 */
const seasons: string = join(rawRoot, 'seasons');

/**
 * the sub-directory that holds sanitized data.
 */
const sanitized: string = join(root, 'data');

/**
 * The sub-directory that holds the
 */
const combined: string = join(root, 'combined');

/**
 * Represents the directories that are used throughout this project.
 */
const directories = { root, src, raw, translations, seasons, sanitized, combined };

export { directories };
