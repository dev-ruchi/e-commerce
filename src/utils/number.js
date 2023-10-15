/**
 * @param {String|Number} number
 * @param {String} placeholder
 * @returns {String}
 */
export function toPrice(number, placeholder = "") {
  if (typeof number !== "number" && !number) return placeholder;

  if (typeof number !== "number") number = Number(number);

  if (isNaN(number)) return placeholder;

  return Intl.NumberFormat(process.env.REACT_APP_LOCALE, {
    style: "currency",
    currency: process.env.REACT_APP_CURRENCY,
    minimumFractionDigits: 0,
  }).format(number);
}
