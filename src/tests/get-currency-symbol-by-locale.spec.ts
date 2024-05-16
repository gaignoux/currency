import { getCurrencySymbolByLocale } from '../utils';
import { TCurrencyLocalCode } from '../types';
import { CurrencySymbol } from '../enums';
import { describe, it, expect } from '@jest/globals';

describe('Get Currency Symbol by Locale Test', () => {
  it('should return the correct currency symbol when a valid locale code is provided', () => {
    const locale: TCurrencyLocalCode = 'ar-AE';
    const currencySymbol: string | string[] = getCurrencySymbolByLocale(locale);
    expect(currencySymbol).toBe(CurrencySymbol.AED);
  });
  it('should return an array of currency symbols when the locale code maps to multiple currency codes', () => {
    const locale: TCurrencyLocalCode = 'en-US';
    const expectedSymbols: CurrencySymbol[] = [
      CurrencySymbol.USD,
      CurrencySymbol.USN,
      CurrencySymbol.USS,
    ];
    const result: string | string[] = getCurrencySymbolByLocale(locale);
    expect(result).toEqual(expectedSymbols);
  });
  it('should throw an error when an invalid locale code is provided', () => {
    expect(
      getCurrencySymbolByLocale('invalid-locale' as TCurrencyLocalCode)
    ).toBeUndefined();
  });
});
