This repo contains the source code used to convert various Animal Crossing: New Horizons spreadsheets to JSON.

### Usage

In order to run this project locally, you **must** enable the Google Sheets API for your google account, which you can do [here](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the).

Click the `Enable the Google Sheets API` button and create a new application for a `Desktop App`. Once created, you'll be presented with your `Client ID`, `Client Secret`, and a button named `Download Client Configuration`. Click this button and save the file (`credentials.json`) to the [config](./config) directory, as you'll need this to run this project.

To run this project after you have installed `credentials.json`, do `npm install && npm run convert`. After you run the project for the first time, follow the steps listed in the console, as this will download and save tokens for the project, you won't be prompted for this again for later executions.

### Structure

  - [raw](./raw) - contains the JSON files converted straight from the spreadsheets,
  - [data](./data) - contains the JSON files after they have been cleaned up and sanitized,
  - [combined](./combined) - contains the JSON files combined under categories, which is determined by the [category](./src/util/categories.ts) file,
  - [src](./src) - contains the source code,
  - [config](./config) - should contain your `credentials.json` file,
  - [module](./module) - contains the source code for the npm module, and
  - [bin](./bin) - contains scripts used for building types of the generated JSON files for Typescript.

### Credit

The spreadsheets converted are:

  - the [AC: NH](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1916357977) Spreadsheet, specifically the editor's edition,
  - the [translations](https://docs.google.com/spreadsheets/d/1BjqVeqIrfEezvyrWLUrwMjmK_UbY2LXkZ12mttamTtk/edit#gid=1222873902) spreadsheet, and
  - the [seasons and events](https://docs.google.com/spreadsheets/d/1bVR5ZvGnLocomSvbypDyY-3gX-2iKaCEtmlDUc6_4sI/edit#gid=1805677455) spreadsheet.

And thanks to [acdb-team](https://github.com/acdb-team), as I took inspiration from their repo, [google-sheets-to-json](https://github.com/acdb-team/google-sheets-to-json).
