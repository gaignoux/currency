import { TCurrency, TCurrencyCode, TCurrencyLocalCode } from '@/types';
import {
  CurrencyCodeLocale,
  CurrencyCountry,
  CurrencyLocaleCode,
  CurrencyName,
  CurrencySymbol,
} from '@/enums';

/**
 * Gets the currency symbol based on the currency code.
 * @param code The currency code.
 * @returns The currency symbol.
 */
export const getCurrencySymbol = (code: TCurrencyCode): string =>
  CurrencySymbol[code];
/**
 * Gets the currency name based on the currency code.
 * @param code The currency code.
 * @returns The name of the currency.
 */
export const getCurrencyName = (code: TCurrencyCode): string =>
  CurrencyName[code];
/**
 * Gets the country associated with a currency based on the currency code.
 * @param code The currency code.
 * @returns The country associated with the currency.
 */
export const getCurrencyCountry = (code: TCurrencyCode): string =>
  CurrencyCountry[code];
/**
 * Gets the locale code associated with a currency based on the locale code.
 * @param locale The locale code.
 * @returns The currency code associated with the locale.
 */
export const getCurrencyLocaleCode = (locale: TCurrencyLocalCode): string =>
  CurrencyLocaleCode[locale];
/**
 * Gets the currency symbol based on the locale code.
 * @param locale The locale code.
 * @returns The currency symbol associated with the locale.
 */
export const getCurrencySymbolByLocale = (locale: TCurrencyLocalCode): string =>
  CurrencySymbol[CurrencyLocaleCode[locale]];
/**
 * Gets the currency symbol based on the country.
 * @param country The country associated with the currency.
 * @returns The currency symbol associated with the country.
 */
export const getCurrencySymbolByCountry = (country: string): string => {
  if (!Object.values(CurrencyCountry).includes(country as any)) return '';

  for (const code in CurrencyCountry) {
    if (CurrencyCountry[code as TCurrencyCode] === country) {
      return CurrencyCountry[code as TCurrencyCode];
    }
  }
  return '';
};
/**
 * Gets all available currency codes.
 * @returns A list of all currency codes.
 */
export const getAllCodes = (): string[] => {
  for (const name in CurrencyName) {
   console.log(name)
  }
  return Object.keys(CurrencyName);
};
/**
 * Gets all available currency names.
 * @returns A list of all currency names.
 */
export const getAllNames = (): string[] => Object.values(CurrencyName);
/**
 * Gets all available currency symbols.
 * @returns A list of all currency symbols.
 */
export const getAllSymbols = (): string[] => Object.values(CurrencySymbol);
/**
 * Gets all available locale codes.
 * @returns A list of all locale codes.
 */
export const getAllLocales = (): string[] => Object.keys(CurrencyLocaleCode);
/**
 * Gets all available locale codes.
 * @returns A list of all locale codes.
 */
export const getAllCountries = (): string[] => Object.values(CurrencyCountry);
/**
 * Gets an object containing complete information about a currency based on the currency code.
 * @param code The currency code.
 * @returns An object containing the name, symbol, locale code, and country associated with the currency.
 */
export const getCurrencyObject = (code: TCurrencyCode): TCurrency => ({
  name: CurrencyName[code],
  symbol: CurrencySymbol[code],
  locale: CurrencyCodeLocale[code],
  country: CurrencyCountry[code],
});
