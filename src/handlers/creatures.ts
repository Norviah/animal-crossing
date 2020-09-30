import { mapKeys, pick } from 'lodash';

import { directories } from '../util/directories';
import { files } from '../util/category';
import { get } from '../util/get';
import { separate } from '../util/separate';
import { timeArray } from '../util/timeArray';
import { validate } from '../util/validate';
import { write } from '../util/write';
import { width } from '../util/width';

// In Animal Crossing, creatures such as fish and bugs are available for certain
// months throughout the year, which is different for both of the hemispheres.
// In the spreadsheet, each creature has an entry representing the months that
// the creature is available, for every month in both hemispheres, which total
// up to 24 entries.

// This script combines these entries into an object with the key representing
// that set's hemisphere, in addition to an array of the time and consecutive
// months that the creature is available.

const monthsArray: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// For the months of the north hemisphere, each month has 'nh' in front, so we
// initialize an array containing these keys for access later on.
const northHemisphere: string[] = monthsArray.map((month: string) => `nh${month}`);

// We do the same for the south hemisphere, which has 'sh' in front.
const southHemisphere: string[] = monthsArray.map((month: string) => `sh${month}`);

/**
 * As every creature is available for certain months of a year, on the
 * spreadsheets, each month is represented with the item that the creature is
 * available, or null if it isn't. This function generates an array representing
 * consecutive months that the creature is available.
 * @param  months The 12 months with the times that the creature can be caught.
 * @return        An array containing consecutive months from the given object.
 */
function activeMonths(months: obj): string[] {
  let available: string[][] = [[]];

  // If the current iteration doesn't have a falsy value, which represents that
  // the creature is available in that month, push it into the last sub-array.
  for (const month in months) {
    if (months[month]) {
      available[available.length - 1].push(month);
    }

    // If the month is a falsy value, it represents that the creature isn't
    // available for this month, we ignore it and push an empty array to
    // represent that there has been a gap in the consecutive months.
    else available.push([]);
  }

  // Once we have a reference to the consecutive months that the creature is
  // available in, filter out the sub-arrays with no elements as those arrays
  // represent the months that the creature isn't available in.
  available = available.filter((months: string[]) => months.length);

  // Initialize an array containing the first and last month of every sub-array,
  // for example, if we have:  [['Jan', 'Feb', 'Mar'], ['Jul', 'Aug']], we'll
  // return an array in the format of:  ['Jab - Mar', 'Jul - Aug'].
  return available.map((months: string[]) =>
    months.length > 1 ? `${months[0]} - ${months[months.length - 1]}` : months[0]
  );
}

/**
 * Returns an object referencing when the creature is available, one entry for
 * both hemispheres. Each entry contains an object referencing the consecutive
 * months that the creature is available in and the time for said months.
 * @param  creature The creature.
 * @return          An object referencing the creature's availability.
 */
function hemisphere(creature: obj): obj {
  const hemispheres: obj = { north: pick(creature, northHemisphere), south: pick(creature, southHemisphere) };

  for (const hemisphere in hemispheres) {
    // Each month has a 'nh' or 'sh' in front to represent the hemisphere that
    // that month represents, we remove that as it's not needed and redundant.
    const months = mapKeys(hemispheres[hemisphere], (value: any, key: string) => key.replace(/sh|nh/g, ''));

    // In order to get the months/time that the creature is available in, we'll
    // have to remove any value with a falsy value, which represents that the
    // creature can't be caught during that month.
    const valid: obj = validate(months);

    // A creature can be caught during the same time for each month that it's
    // available in, atleast I'm assuming, so we simply get the first month's
    // time, splitting it as creatures may have more than one time span.
    const time: string[] = separate(Object.values(valid)[0], ';');

    // Next, we'll get an array representing the consecutive hours of when the
    // creature is available, for each time span.
    let timespan: number[] | number[][] = time.map((time: string) => timeArray(time));

    // The array will result into a 2 level deep array, if the creature has only
    // one time span, then we'll set the array to the first level.
    timespan = timespan.length === 1 ? timespan.flat() : timespan;

    // In order to get the number of each month that the creature is available
    // in, we'll get the index of each month from the global months container
    // and add one as arrays are indexed off of zero.
    const monthArray: number[] = Object.keys(valid).map((month: string) => monthsArray.indexOf(month) + 1);

    hemispheres[hemisphere] = { time, timeArray: timespan, months: activeMonths(months), monthsArray: monthArray };
  }

  return hemispheres;
}

for (const file of files('Creatures', directories.sanitized)) {
  const creatures: obj[] = get(file);

  for (const creature of creatures) {
    creature.hemipsheres = hemisphere(creature);
    creature.colors = [creature.color1, creature.color2].filter((color) => !!color);

    for (const key of ['color1', 'color2', ...northHemisphere, ...southHemisphere]) {
      delete creature[key];
    }
  }

  write(file, creatures, width('Creatures'));
}
