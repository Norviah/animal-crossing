/**
 * Returns a copy of the given object with falsy values removed.
 * @param  object The object to validate.
 * @return        The given object copied with no falsy values.
 */
export function validate(object: obj): obj {
  // Initialize a new array referencing the keys from the given object filtered
  // to remove any key that results to a non falsy value.
  const keys: string[] = Object.keys(object).filter((key: string) => object[key]);

  const result: obj = {};

  for (const key of keys) {
    result[key] = object[key];
  }

  return result;
}
