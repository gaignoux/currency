import { TCurrency, TCurrencyCode, TCurrencyLocalCode } from '@/types';
import {
  CurrencyCodeLocale,
  CurrencyCountry,
  CurrencyLocaleCode,
  CurrencyName,
  CurrencySymbol,
} from '@/enums';

/**
 * Obtém o símbolo da moeda com base no código da moeda.
 * @param code O código da moeda.
 * @returns O símbolo da moeda.
 */
export const getCurrencySymbol = (code: TCurrencyCode): string =>
  CurrencySymbol[code];
/**
 * Obtém o nome da moeda com base no código da moeda.
 * @param code O código da moeda.
 * @returns O nome da moeda.
 */
export const getCurrencyName = (code: TCurrencyCode): string =>
  CurrencyName[code];
/**
 * Obtém o país associado a uma moeda com base no código da moeda.
 * @param code O código da moeda.
 * @returns O país associado à moeda.
 */
export const getCurrencyCountry = (code: TCurrencyCode): string =>
  CurrencyCountry[code];
/**
 * Obtém o código de localidade associado a uma moeda com base no código de localidade.
 * @param locale O código de localidade.
 * @returns O código de moeda associado à localidade.
 */
export const getCurrencyLocaleCode = (locale: TCurrencyLocalCode): string =>
  CurrencyLocaleCode[locale];
/**
 * Obtém o símbolo da moeda com base no código de localidade.
 * @param locale O código de localidade.
 * @returns O símbolo da moeda associado à localidade.
 */
export const getCurrencySymbolByLocale = (locale: TCurrencyLocalCode): string =>
  CurrencySymbol[CurrencyLocaleCode[locale]];
/**
 * Obtém o símbolo da moeda com base no país.
 * @param country O país associado à moeda.
 * @returns O símbolo da moeda associado ao país.
 */
export const getCurrencySymbolByCountry = (country: string): string => {
    for (const code in CurrencyCountry) {
        if (CurrencyCountry[code as TCurrencyCode] === country) {
            return CurrencyCountry[code as TCurrencyCode];
        }
    }
   return '';
};
/**
 * Obtém todos os códigos de moeda disponíveis.
 * @returns Uma lista de todos os códigos de moeda.
 */
export const getAllCodes = (): string[] => Object.keys(CurrencyName);
/**
 * Obtém todos os nomes de moeda disponíveis.
 * @returns Uma lista de todos os nomes de moeda.
 */
export const getAllNames = (): string[] => Object.values(CurrencyName);
/**
 * Obtém todos os símbolos de moeda disponíveis.
 * @returns Uma lista de todos os símbolos de moeda.
 */
export const getAllSymbols = (): string[] => Object.values(CurrencySymbol);
/**
 * Obtém todos os códigos de localidade disponíveis.
 * @returns Uma lista de todos os códigos de localidade.
 */
export const getAllLocales = (): string[] => Object.keys(CurrencyLocaleCode);
/**
 * Obtém todos os códigos de localidade disponíveis.
 * @returns Uma lista de todos os códigos de localidade.
 */
export const getAllCountries = (): string[] => Object.values(CurrencyCountry);
/**
 * Obtém um objeto contendo informações completas sobre uma moeda com base no código da moeda.
 * @param code O código da moeda.
 * @returns Um objeto contendo nome, símbolo, código de localidade e país associados à moeda.
 */
export const getCurrencyObject = (code: TCurrencyCode): TCurrency => ({
  name: CurrencyName[code],
  symbol: CurrencySymbol[code],
  locale: CurrencyCodeLocale[code],
  country: CurrencyCountry[code]
});
