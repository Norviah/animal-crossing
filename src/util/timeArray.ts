/**
 * Represents a list of hours in a 12 hour clock format, with the index of each
 * hour representing that hour's hour in a 24 hour clock format.
 */
const hours: string[] = [
  '12 AM',
  '1 AM',
  '2 AM',
  '3 AM',
  '4 AM',
  '5 AM',
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM',
  '10 PM',
  '11 PM',
];

/**
 * Represents the regex used to correctly match a string in the proper time
 * format that the item spreadsheet uses.
 */
const regex: RegExp = /^(\d{1,2}\s?(am|pm))\s?(–|-)\s?(\d{1,2}\s?(am|pm))$/i;

/**
 * Represents the hours of a full day in a 24 hour clock format.
 */
const allDay: number[] = hours.map((hour) => hours.indexOf(hour));

/**
 * In the AC spreadsheet, the time availability for creatures are represented in
 * the format: HOUR AM/PM - HOUR AM/PM, for example: 9 PM - 4 PM. That string is
 * taken and is converted into an array containing the consecutive hours based
 * in a 24 hour clock format, so for the example above, that would be converted
 * into the array: [21, 22, 23, 0, 1,  2,  3].
 * @param  string The time to convert.
 * @return        An array representing the 24 hour values of the time span.
 */
export function timeArray(string: 'All day' | string): number[] {
  // If the given time is 'All day', meaning that the given creature is
  // available for 24 hours, we'll return the array for 24 hours.
  if (string.toLowerCase() === 'all day') {
    return allDay;
  }

  // Using a regular expression, we'll get the starting and ending time.
  const matches: RegExpMatchArray = regex.exec(string.toUpperCase())!;

  // This array will contain the hours for the timespan.
  const timespan: number[] = [];

  const [, beginning, , , end] = matches;

  // As the index of the global hour array represents the index of the hours in
  // a 24 hour format, we'll get the index for the beginning hour.
  let index: number = hours.indexOf(beginning);

  // As long as the current index isn't the index for the ending time, we'll
  // keep pushing the current index into the timespan container.
  while (index !== hours.indexOf(end)) {
    timespan.push(index);

    // Here we'll check if the current index, or hour, is 23 before adding 1 as
    // hours 24 and beyond don't exist, so we'll reset it back to one.
    index = index === 23 ? 0 : index + 1;
  }

  return timespan;
}
