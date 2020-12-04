### tl;dr
  - clone the repo
  - change directories into the project
  - click [this link](https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the)
  - click `Enable the Google Sheets API`
  - agree with the prompt and click `Next`
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

### Setup

Clone the repo with `git clone https://github.com/Norviah/animal-crossing.git` and change directories into the project.

### Step 1

In order to run this project locally, you must enable the Google Sheets API for your Google account, which you can do [here](./https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the).

Open this and click `Enable the Google Sheets API` button, then, agree with the prompt and create an application for a `Desktop App`. Once created, you'll be presented with your `Client ID`, `Client Secret`, and a button named `Download Client Configuration`. Click this button and save the downloaded file, it should be named `credentials.json`, to the [config](./config) directory, as you'll need this to run the project.

### Step 2

Install dependencies with `npm install`, once installed, run the program with `npm run build:src && npm run start`. `npm run build:src` calls a script in the `package.json` file that compiles the TypeScript codebase into JavaScript, and `npm run start` executes the JavaScript code.

### Step 3

When executing this project for the first time, you'll be presented with a link in the console. To run this project, you need two config files, `credentials.json` and `tokens.json`, you must provide `credentials.json` yourself but the project will generate `tokens.json` file for you.

Open the link in the console and sign in with the Google account you used to create the application. After you've signed in, you'll most likely be warned that the application isn't verified, ignore this warning as, well, the project isn't verified. If you have been warned, click `Advanced` and click `Go to [app name]`. Next, Google will ask you to grant the application permission to view spreadsheets, click `Allow` and click `Allow` again.

Finally, you'll be prompted with a code, copy that code and paste it into the console, then, the program should start.

You won't be asked to give permissions after the first time you have ran the project as the project generates a `tokens.json` file for you during the first execution and saves it to the config directory. From then on, the program will use this file.

### Step 4

To run this project later on:
  - if you have edited the source code in the [src](./src) directory, you must run the project with `npm run build:src && npm run start` as it recompiles the TypeScript codebase into JavaScript,
  - if you haven't edited the source code since the last time you have compiled it, run the program with `npm run start`.


### Structure

- [bin](./bin) - contains scripts used for generating types for TypeScript,
- [config](./config) - should contain the `credentials.json` file,
- [json](./json) - contains the JSON files,
- [module](./module) - contains the source code for the [npm module](https://www.npmjs.com/package/animal-crossing), and
- [src](./src) - contains the source code for the converter.

### Credit/Thanks

The spreadsheets that were converted and is available through this module are:
  - the [Animal Crossing: New Horizons](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627) spreadsheet, specifically the editor's copy, and
  - the [Translations](https://tinyurl.com/acnh-translation) spreadsheet.

If you use any JSON file and/or this module for a project, please credit and link these spreadsheets somewhere in your project.

And thanks to the [acdb-team](https://github.com/acdb-team), as I took inspiration from their repo, [google-sheets-to-json](https://github.com/acdb-team/google-sheets-to-json).
