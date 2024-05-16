import { describe, expect, it } from '@jest/globals';
import { getAllNames } from '../app';
import { CurrencyName } from '../enums';

describe('Get All Names Test', () => {
  it('should return an array of all currency names', () => {
    const result = getAllNames();
    expect(result).toEqual(Object.values(CurrencyName));
  });
  it('should return an empty array when CurrencyName enum is empty', () => {
    const originalCurrencyName = CurrencyName;
    (CurrencyName as any) = {};
    const result = getAllNames();
    expect(result).toEqual([]);
    (CurrencyName as any) = originalCurrencyName;
  });
});
