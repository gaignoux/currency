import { getCurrencyLocaleCode } from '../utils';
import { TCurrencyLocalCode } from '../types';
import { describe, it, expect } from '@jest/globals';
import { CurrencyCode } from '../enums';

describe('Get Currency Locale Code Test', () => {
  it('should return the correct currency code when given a valid locale code', () => {
    const localeCode: TCurrencyLocalCode = 'ti-ER';
    const currencyCode = getCurrencyLocaleCode(localeCode);
    expect(currencyCode).toBe(CurrencyCode.ERN);
  });
  it('should return an array of currency code associated with a valid locale code', () => {
    const localeCode: TCurrencyLocalCode = 'es-MX';
    const currencyCode = getCurrencyLocaleCode(localeCode);
    expect(currencyCode).toEqual([CurrencyCode.MXN, CurrencyCode.MXV]);
  });
  it('should throw an error when given an invalid locale code', () => {
    expect(
      getCurrencyLocaleCode('invalid-locale' as TCurrencyLocalCode)
    ).toBeUndefined();
  });
});
