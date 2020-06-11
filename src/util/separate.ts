/**
 * Separates the string with the given separator and returns the array trimmed.
 * @param  string    The string to separate.
 * @param  separator The string to separate with.
 * @return           The string separated with the separator and trimmed.
 */
function separate(string: string, separator: string): string[] {
  return string.split(separator).map((string: string) => string.trim());
}

export { separate };
