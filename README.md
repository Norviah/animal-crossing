## animal-crossing

An npm database for Animal Crossing: New Horizons, the items were generated from the various public Google Spreadsheets, and the source code for the module is available in the [module](https://github.com/Norviah/animal-crossing/tree/master/module) directory.

For a guide on how to run and generate the converter locally, look at this [README](https://github.com/Norviah/animal-crossing/blob/master/CONVERT.md). Translations are linked to the items of the spreadsheets, but expect errors to arrise as the internal IDs on the [translations](https://docs.google.com/spreadsheets/d/1BjqVeqIrfEezvyrWLUrwMjmK_UbY2LXkZ12mttamTtk/edit#gid=1222873902) and [AC: NH](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1916357977) spreadsheet aren't linked 100% correctly.

Documentation is available in the [documentation](https://github.com/Norviah/animal-crossing/tree/master/module/docs) directory.

### Installation

```
npm install animal-crossing
```

### Usage

The available items, along with types, are available from this module:

  - achievements
  - construction
  - creatures
  - events
  - ids
  - items
  - northenHemisphere
  - southernHemisphere
  - reactions
  - recipes
  - translations
  - villagers

Note that the values are changed from the spreadsheets in favor of JavaScript syntax, for example, `NA` is `null`, `Yes/No` is changed to `true/false`, etc., to see how the values will look like, you can take a look at the [directory](https://github.com/Norviah/animal-crossing/tree/master/combined) with the JSON files. But for the rest of the values, they're the same as the values on the spreadsheets.

In addition, the keys are changed to camelCase, so they won't be the same as the ones on the spreadsheets.

### Example

```javascript

const { villagers } = require('animal-crossing');

// Note that all entries are arrays.
const freya = villagers.find((villager) => villager.name === 'Freya');
console.log(freya); // => information about Freya

```

### Credit

The spreadsheets converted are:

  - the [AC: NH](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1916357977) Spreadsheet, specifically the editor's edition,
  - the [translations](https://docs.google.com/spreadsheets/d/1BjqVeqIrfEezvyrWLUrwMjmK_UbY2LXkZ12mttamTtk/edit#gid=1222873902) spreadsheet, and
  - the [seasons and events](https://docs.google.com/spreadsheets/d/1bVR5ZvGnLocomSvbypDyY-3gX-2iKaCEtmlDUc6_4sI/edit#gid=1805677455) spreadsheet.

And thanks to [acdb-team](https://github.com/acdb-team), as I took inspiration from their repo, [google-sheets-to-json](https://github.com/acdb-team/google-sheets-to-json).
