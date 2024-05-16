import { CurrencyCodeLocale, CurrencyCountry, CurrencyName, CurrencySymbol, } from './enums';
import { CurrencyLocaleCode } from './constants';
/**
 * Gets the currency symbol based on the currency code.
 * @param code The currency code.
 * @returns The currency symbol.
 */
export const getCurrencySymbol = (code) => CurrencySymbol[code];
/**
 * Gets the currency name based on the currency code.
 * @param code The currency code.
 * @returns The name of the currency.
 */
export const getCurrencyName = (code) => CurrencyName[code];
/**
 * Gets the country associated with a currency based on the currency code.
 * @param code The currency code.
 * @returns The country associated with the currency.
 */
export const getCurrencyCountry = (code) => CurrencyCountry[code];
/**
 * Gets the locale code associated with a currency or an array of them based on the locale code.
 * @param locale The locale code.
 * @returns The currency code associated with the locale or an array of them.
 */
export const getCurrencyLocaleCode = (locale) => CurrencyLocaleCode[locale];
/**
 * Gets the currency symbol or an array of them based on the locale code.
 * @param locale The locale code.
 * @returns The currency symbol associated with the locale or an array of them.
 */
export const getCurrencySymbolByLocale = (locale) => {
    const localeCode = CurrencyLocaleCode[locale];
    if (!Array.isArray(localeCode)) {
        return CurrencySymbol[localeCode];
    }
    const symbols = [];
    for (const code of localeCode) {
        symbols.push(CurrencySymbol[code]);
    }
    return symbols;
};
/**
 * Gets the currency symbol based on the country.
 * @param country The country associated with the currency.
 * @returns The currency symbol associated with the country.
 */
export const getCurrencySymbolByCountry = (country) => {
    if (!Object.values(CurrencyCountry).includes(country))
        return '';
    for (const code in CurrencyCountry) {
        if (CurrencyCountry[code] === country) {
            return CurrencySymbol[code];
        }
    }
    return '';
};
/**
 * Gets all available currency codes.
 * @returns A list of all currency codes.
 */
export const getAllCodes = () => {
    return Object.keys(CurrencyName);
};
/**
 * Gets all available currency names.
 * @returns A list of all currency names.
 */
export const getAllNames = () => Object.values(CurrencyName);
/**
 * Gets all available currency symbols.
 * @returns A list of all currency symbols.
 */
export const getAllSymbols = () => Object.values(CurrencySymbol);
/**
 * Gets all available locale codes.
 * @returns A list of all locale codes.
 */
export const getAllLocales = () => Object.keys(CurrencyLocaleCode);
/**
 * Gets all available locale codes.
 * @returns A list of all locale codes.
 */
export const getAllCountries = () => Object.values(CurrencyCountry);
/**
 * Gets an object containing complete information about a currency based on the currency code.
 * @param code The currency code.
 * @returns An object containing the name, symbol, locale code, and country associated with the currency.
 */
export const getCurrencyObject = (code) => {
    if (!Object.keys(CurrencyName).includes(code) ||
        !Object.keys(CurrencySymbol).includes(code) ||
        !Object.keys(CurrencyCodeLocale).includes(code) ||
        !Object.keys(CurrencyCountry).includes(code)) {
        throw new Error('Invalid currency code');
    }
    return {
        name: CurrencyName[code],
        symbol: CurrencySymbol[code],
        locale: CurrencyCodeLocale[code],
        country: CurrencyCountry[code],
    };
};
//# sourceMappingURL=app.js.map