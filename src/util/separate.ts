/**
 * Separates the string with the given separator and returns the array trimmed.
 * @param  string    The string to separate.
 * @param  separator The character to separate with.
 * @return           The string separated with the separator.
 */
export function separate(string: string, separator: string): string[] {
  return (string != null) ? string.split(separator).map((string: string) => string.trim()) : [];
}
