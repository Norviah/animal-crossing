## animal-crossing

An Animal Crossing: New Horizons database for npm, the data available through this module is made from various public Google Spreadsheets for Animal Crossing: New Horizons, which is referenced below.

In addition to the spreadsheets converted to JSON, the data have been sanitized and modified so working with them can be more friendly and easier, for example, recipes and translations have been merged into their relevant item.

If you're just looking for the JSON files, they can be viewed in [this directory](https://github.com/Norviah/animal-crossing/tree/master/json). For a guide on how to run the converter locally, look at this [README](https://github.com/Norviah/animal-crossing/blob/master/CONVERT.md).

### Installation

```
npm install animal-crossing
```

### Documentation

Documentation is generated using [typedoc](https://www.npmjs.com/package/typedoc) with the [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) plugin, and can be viewed [here](https://github.com/Norviah/animal-crossing/tree/master/module/docs).

### Usage

The following items are available from this module:
  - `achievements`
  - `construction`
  - `creatures`
  - `items`
  - `reactions`
  - `recipes`
  - `seasonsAndEvents`
  - `translations`
  - `villagers`
  - `npcs`

Along with types, for those using TypeScript:
  - `IAchievement`
  - `IConstruction`
  - `ICreature`
  - `IEvent`
  - `IItem`
  - `IReaction`
  - `IRecipe`
  - `ISeasonsAndEvents`
  - `ITranslation`
  - `IVillager`
  - `INPC`

The names of all items are changed into camelCase, so they won't be same as shown on the spreadsheets. As for values, they're all changed in favor of JavaScript values, for example, `NA` is changed to `null`, `Yes`/`No` is changed to `true`/`false`, etc. If a value represents that the key does not relate to the item, an example being the key `Lighting Type` for the item `Acoustic Guitar`, the value will be changed to `null`. In addition, if a key can have multiple values, the values will be split and changed into an array.

As for the rest of the values, they're the same as they appear on the spreadsheets. To view how the keys/values are represented, you can look at the [documentation](https://github.com/Norviah/animal-crossing/tree/master/module/docs) or the JSON files [here](https://github.com/Norviah/animal-crossing/tree/master/json).

Note that all entries are arrays, so to find a certain item, you can use the `find` method.

```javascript
// Node.js
const { villagers } = require('animal-crossing');

// TypeScript
import { villagers } from 'animal-crossing';

const freya = villagers.find(villager => villager.name === 'Freya');

// Once you have found the item you're looking for, you can view
// information for said item. For villagers, for example, some
// properties you can view are translations of their name and catchphrase.

console.log(freya.translations.spanish); // Freya's name translated to Spanish,
console.log(freya.catchphrases.spanish); // and her catchphrase translated as well.

// To view the properties of all items, take a look at the documentation or the JSON files itself.
```

### Credit/Thanks

The spreadsheets that were converted and is available through this module are:
  - the [Animal Crossing: New Horizons](https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627) spreadsheet, specifically the editor's copy, and
  - the [Translations](https://tinyurl.com/acnh-translations) spreadsheet.

If you use any JSON file and/or this module for a project, please credit and link these spreadsheets somewhere in your project.

And thanks to the [acdb-team](https://github.com/acdb-team), as I took inspiration from their repo, [google-sheets-to-json](https://github.com/acdb-team/google-sheets-to-json).
