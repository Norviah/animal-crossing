/**
 * Deletes any values from the given object that evaluates to a falsy value.
 * @param object The object to validate.
 */
function validate(object: obj): void {
  for (const key in object) if (!object[key]) delete object[key];
}

export { validate };
