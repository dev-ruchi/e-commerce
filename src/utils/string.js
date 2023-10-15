/**
 *
 * @param {String} str
 * @param {Number} length
 * @param {String} suffix
 * @returns {String}
 */
export function truncate(str, length = 150, suffix = "...") {
  if (str.length <= length) return str;

  return str.substring(0, length) + suffix;
}
