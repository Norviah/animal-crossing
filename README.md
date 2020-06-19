## animal-crossing

An Animal Crossing: New Horizons database for npm, the data available through this module is generated from various public Google Spreadsheets for Animal Crossing: New Horizons.

In addition to converting the spreadsheets to JSON, items have been sanitized so working with the data can be easier and friendlier. For example, translations are merged with items, but, errors and mistranslations are possible as the IDs aren't linked 100% correctly, so some translations had to be linked manually.

For a guide on how to run the converter locally, look at this [README](https://github.com/Norviah/animal-crossing/blob/master/CONVERT.md).

### Installation

```
npm install animal-crossing
```

### Documentation

Documentation is generated using [typedoc](https://www.npmjs.com/package/typedoc) with the [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) plugin, and is available in the [documentation](https://github.com/Norviah/animal-crossing/tree/master/module/docs) directory.

### Usage

The following items are available from this module:
  - `achievements`
  - `construction`
  - `creatures`
  - `events`
  - `ids`
  - `items`
  - `northenHemisphere`
  - `southernHemisphere`
  - `reactions`
  - `recipes`
  - `translations`
  - `villagers`

In addition to types, for those using Typescript:
  - `IAchievement`
  - `IConstruction`
  - `ICreature`
  - `IEvent`
  - `IID`
  - `IItem`
  - `IHemisphere`
  - `IReaction`
  - `IRecipe`
  - `ITranslation`
  - `IVillager`

Values of all items are changed in favor of native JavaScript types, for example, `N/A` is changed to `null`, `Yes/No` is changed to `true/false`, etc. If a value essentially represents that the key does not relate to the item, an example being the `Lighting Type` key to the item `acoustic guitar`, the value will be changed to `null`. In addition, if a key can have multiple values, for example, the source or theme of an item, the values will be split and changed into an array.

As for the rest of the values, they're the same as they appear on the spreadsheets. To view how the values are represented, you can look at the [documentation](https://github.com/Norviah/animal-crossing/tree/master/module/docs) or the JSON files [here](https://github.com/Norviah/animal-crossing/tree/master/combined).

All entries are arrays, so to find a certain item you want, you can use the `find` method.

```Typescript
// node.js
const { villagers } = require('animal-crossing');

// Typescript
import { villagers } from 'animal-crossing'

const freya = villagers.find(villager => villager.name === 'Freya');

// Once you have found the item you're looking for, you can view specific
// information for said item. For example, for villagers, you can view
// translations of their name and their catchphrase.

console.log(freya.translations); => // Translations of Freya's name,
console.log(freya.catchphrases); => // and translations for her catchphrase.

// To view the properties of all items, take a look at the documentation directory.
```

### Credit/Thanks

The spreadsheets that were used and is available through this module are:
  - the [Animal Crossing: New Horizons](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627) spreadsheet, specifically the editor's copy,
  - the [Translations](https://tinyurl.com/acnh-translation) spreadsheet, and
  - the [Seasons/Calendar](https://tinyurl.com/acnh-calendar) spreadsheet.

If you use any JSON file and/or this module for a project, please credit and link these spreadsheets somewhere in your project!

And thanks to the [acdb-team](https://github.com/acdb-team), as I took inspiration from their repo, [google-sheets-to-json](https://github.com/acdb-team/google-sheets-to-json).
