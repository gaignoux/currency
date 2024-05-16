import { describe, expect, it } from '@jest/globals';
import { getAllLocales } from '../app';
import { CurrencyLocaleCode } from '../constants';

describe('Get All Locales Test', () => {
  it('should return an array of all available locale codes when CurrencyLocaleCode is not empty', () => {
    const result = getAllLocales();
    expect(result).toEqual(Object.keys(CurrencyLocaleCode));
  });
  it('should return an empty array when CurrencyLocaleCode is empty', () => {
    const emptyCurrencyLocaleCode = { ...CurrencyLocaleCode };
    (CurrencyLocaleCode as any) = {};
    const result = getAllLocales();
    expect(result).toEqual([]);
    (CurrencyLocaleCode as any) = emptyCurrencyLocaleCode;
  });
});
