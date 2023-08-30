/**
 * @param {String|Number} number
 * @param {String} placeholder
 * @returns {String}
 */
export function toPrice(number, placeholder = "") {
    if (typeof number !== 'number' && !number) return placeholder;

    if (typeof number !== 'number') number = Number(number);

    return Intl.NumberFormat(process.env.REACT_APP_LOCALE, {
        maximumSignificantDigits: 2,
        style: "currency",
        currency: process.env.REACT_APP_CURRENCY,
    }).format(number);
}