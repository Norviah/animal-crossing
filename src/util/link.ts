/**
 * On Google Sheets, images aren't stored as the image's literal link, instead,
 * it's stored as a formula as '=IMAGE(URL)'. So if the given value is a string
 * and contains an image, the link is returned, if not, the value is returned.
 * @param  value The value to grab a link from.
 * @return       The link from the value if a link exists, otherwise, the value.
 */
export function link(value: any): typeof value {
  return typeof value === 'string' ? value.replace(/^=IMAGE\(\"(.*)\"\)$/gi, '$1') : value;
}
