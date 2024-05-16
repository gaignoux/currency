import { describe, it, expect } from '@jest/globals';
import { getAllCodes } from '../app';
import { CurrencyName } from '../enums';

describe('Get All Codes Test', () => {
  it('should return an array of all currency codes', () => {
    const currencyCodes = getAllCodes();
    expect(currencyCodes).toEqual(Object.keys(CurrencyName));
  });
  it('should return an empty array when CurrencyName is empty', () => {
    const originalCurrencyName = { ...CurrencyName };
    (CurrencyName as any) = {};
    const currencyCodes = getAllCodes();
    expect(currencyCodes).toEqual([]);
    (CurrencyName as any) = originalCurrencyName;
  });
});
