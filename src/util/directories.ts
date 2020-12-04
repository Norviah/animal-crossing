import { path } from 'app-root-path';
import { join } from 'path';

/**
 * The absolute path for the root directory that will contain the JSON files.
 */
const root: string = join(path, 'json');

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
 * the sub-directory that holds sanitized data.
 */
const sanitized: string = join(root, 'data');

/**
 * The sub-directory that holds the JSON files combined via categories.
 */
const combined: string = join(root, 'combined');

/**
 * Represents the directories that are used throughout this project.
 */
export const directories = { root, raw, translations, sanitized, combined };
