/**
 * Represents every time in a 12 hour format with the hour it represents in 24
 * hour.
 */
const hours: obj = {
  '12 AM': 0,
  '1 AM': 1,
  '2 AM': 2,
  '3 AM': 3,
  '4 AM': 4,
  '5 AM': 5,
  '6 AM': 6,
  '7 AM': 7,
  '8 AM': 8,
  '9 AM': 9,
  '10 AM': 10,
  '11 AM': 11,
  '12 PM': 12,
  '1 PM': 13,
  '2 PM': 14,
  '3 PM': 15,
  '4 PM': 16,
  '5 PM': 17,
  '6 PM': 18,
  '7 PM': 19,
  '8 PM': 20,
  '9 PM': 21,
  '10 PM': 22,
  '11 PM': 23,
};

/**
 * Represents the regex used to correctly match a string in the proper time
 * format that the item spreadsheet uses.
 */
const regex: RegExp = /^(\d+ (PM|AM))[  ]–[  ](\d+ (PM|AM))$/i;

/**
 * Represents a time array for 24 hours.
 */
const allDay: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

/**
 * Converts the given time span into an array representing the number of each
 * hour, from the beginning to the end, in a 24 hour format.
 * @param  string The time to convert.
 * @return        An array representing the 24 hour values of the time span.
 */
function timeArray(string: string): number[] {
  if (string.toLowerCase() === 'all day') {
    return allDay;
  }

  // Using regex, grab the groups for the starting and ending time.
  const matches: RegExpMatchArray | null = regex.exec(string.toUpperCase());

  if (!matches) {
    throw new Error(`'${string}' isn't a valid time format`);
  }

  // Contains the hours for the given time span.
  const span: number[] = [];

  // Save references to the starting and ending time.
  const [, beginning, , end] = matches;

  // In order to get the number of the time span, we'll start with the beginning
  // time and add one until we reach the number of the ending time. If the hour
  // reaches 23, we'll reset it back to 0. So we'll have a variable represent
  // the starting hour.
  let hour: number = hours[beginning];

  while (hour !== hours[end]) {
    // Push the current hour into the array,
    span.push(hour);

    // and add 1 to it's value, reseting it back to 0 if it's 23.
    hour = hour === 23 ? 0 : hour + 1;
  }

  return span;
}

export { timeArray };
