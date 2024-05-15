import { getCurrencySymbolByLocale } from '@/app';
import { TCurrencyLocalCode } from '@/types';
import { CurrencySymbol } from '@/enums';
import { describe, it, expect } from '@jest/globals';

describe('Get Currency Symbol by Locale Test', () => {
  it('should return the correct currency symbol when a valid locale code is provided', () => {
    const locale: TCurrencyLocalCode = 'en-US';
    const currencySymbol: string = getCurrencySymbolByLocale(locale);
    expect(currencySymbol).toBe(CurrencySymbol.USD);
  });
  it('should throw an error when an invalid locale code is provided', () => {
    expect(getCurrencySymbolByLocale('invalid-locale' as TCurrencyLocalCode)).toThrowError();
  });
});
