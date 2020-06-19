### tl;dr
  - clone the repo
  - change directories into the project
  - click [this link](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the)
  - click `Enable the Google Sheets API`
  - create an application for `Desktop App`
  - click `Download Client Configuration`
  - save this file, it should be named `credentials.json`, to the [config](./config) directory
  - install dependencies with `npm install`
  - run the project with `npm run build:src && npm run start`
  - these steps only matter when you run the project for the **first** time
    - click the URL prompted in the console
    - sign in with the Google account that you used to create the application
    - you'll probably be warned that the project isn't verified, ignore this warning
      - if you have been warned, click `Advance`
      - click `Go to [app name]`
    - click `Allow`
    - click `Allow` again
    - copy the code and paste it into the console
    - once pasted, the program should start
  - to run the program later on:
    - if you have edited the source code in the [src](./src) directory, run the project with `npm run build:src && npm run start` as you must recompile the source code into JavaScript
    - if you haven't edited the source code since the last time you have compiled it, run the program with `npm run start`

### Guide

In order to run this project locally, you must enable the Google Sheets API for your Google account, which you can do [here](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the).

**Step 1** Open [the link above](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the) and click `Enable the Google Sheets API` button, then, create an application for a `Desktop App`. Once created, you'll be presented with your `Client ID`, `Client Secret`, and a button named `Download Client Configuration`. Click this button and save the file, it should be named `credentials.json`, to the [config](./config) directory, as you'll need this to run the project.

**Step 2** After you have installed `credentials.json` to the [config](./config) directory, install needed dependencies with `npm install`, once installed, run the program with `npm run build:src && npm run start`. This will call a script in the `package.json` file that compiles the Typescript code into JavaScript and then executes the compiled JavaScript code.

**Step 3** To run this program you, in addition to `credentials.json`, need a `tokens.json` file. Although you must provide `credentials.json` yourself, the program will create a `tokens.json` file for you. Click the URL prompted in the link and sign in with the Google account you used to create the application. After you've signed in, Google will most likely warn you that the application isn't verified, don't worry as, well, the application isn't verified. If you have been warned, click `Advanced`, and click `Go to [app name]`. Next, Google will ask you to allow to give the application permission to view spreadsheets, click `Allow` and then click `Allow` again. Finally, you'll be prompted with a code, copy that code and paste it into the console, then, the program should start.

You won't be asked to give permissions for the application after the first time you have ran the program as, during the first time execution, it generates a `tokens.json` file for you and saves it to the [config](./config) directory. From then on, the program will use this file.

**Step 4** To run the project later on:
  - if you have edited the source code in the [src](./src) directory, you must run `npm run build:src && npm run start` as it recompiles the Typescript code into JavaScript and will start the program
  - if you haven't edited the source code since the last time you have compiled it, run the program with `npm run start`

When ran with `npm run start`, every directory that contains JSON file will be deleted and the project will generate new JSON files.

### Structure

  - [raw](./raw) - contains the JSON files converted straight from the spreadsheets,
  - [data](./data) - contains the JSON files after they have been sanitized,
  - [combined](./combined) - contains the JSON files combined under categories, which is determined by the [category](./src/util/categories.ts) file,
  - [src](./src) - contains the source code,
  - [config](./config) - should contain your `credentials.json` file,
  - [module](./module) - contains the source code for the [npm module](http://npmjs.com/package/animal-crossing), and
  - [bin](./bin) - contains scripts used for generating types of the JSON files for Typescript.

### Credit/Thanks

The spreadsheets that were used are:
  - the [Animal Crossing: New Horizons](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627) spreadsheet, specifically the editor's copy,
  - the [Translations](https://tinyurl.com/acnh-translation) spreadsheet, and
  - the [Seasons/Calendar](https://tinyurl.com/acnh-calendar) spreadsheet.

If you use any JSON file and/or this module for a project, please credit and link these spreadsheets somewhere in your project!

And thanks to the [acdb-team](https://github.com/acdb-team), as I took inspiration from their repo, [google-sheets-to-json](https://github.com/acdb-team/google-sheets-to-json).
