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
    data: directories.raw,
  },

  {
    id: '1GwUuCKgJC61qWEjWyeG3nVjkHesszRL6XbPA_dHfLoI',
    exclude: ['READ ME', 'Changelog'],
    data: directories.translations,
  },

  {
    id: '1bVR5ZvGnLocomSvbypDyY-3gX-2iKaCEtmlDUc6_4sI',
    exclude: ['About'],
    data: directories.seasons,
  },
];
