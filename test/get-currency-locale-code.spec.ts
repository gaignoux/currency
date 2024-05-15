import { getCurrencyLocaleCode } from '@/app';
import { TCurrencyLocalCode } from '@/types';
import { describe, it, expect } from '@jest/globals';

describe('Get Currency Locale Code Test', () => {
  it('should return the correct currency code when given a valid locale code', () => {
    const localeCode: TCurrencyLocalCode = 'en-US';
    const currencyCode = getCurrencyLocaleCode(localeCode);
    expect(currencyCode).toBe('USD');
  });
  it('should throw an error when given an invalid locale code', () => {
    expect(getCurrencyLocaleCode('invalid-locale' as TCurrencyLocalCode)).toBeUndefined();
  });
});
