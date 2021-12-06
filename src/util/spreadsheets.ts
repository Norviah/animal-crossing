import { Spreadsheet } from '@norviah/sheets';
import { directories } from './directories';

/**
 * Represents a list of Google Spreadsheets that we'll convert to JSON, the
 * spreadsheets being: The Animal Crossing: New Horizons spreadsheet, the
 * Translations spreadsheet, and the Events/Seasons spreadsheet.
 */
export const spreadsheets: Spreadsheet[] = [
  {
    id: '1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM',
    exclude: ['Editor Read Me', 'Read Me', 'Unused Unique IDs'],
    dir: directories.raw,
  },

  {
    id: '1MMbsvDfu59OY9YBEAfHhFJ6O8vRTllNFgMrX7RBZuyI',
    exclude: ['Readme', 'Changelog'],
    dir: directories.translations,
  },
];
