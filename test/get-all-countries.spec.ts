import { describe, it, expect } from '@jest/globals';
import { getAllCountries } from '@/app';
import { CurrencyCountry } from '@/enums';

describe('Get All Countries Test', () => {
  it('should return an array of all available country names', () => {
    const result = getAllCountries();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(Object.values(CurrencyCountry).length);
    expect(result).toEqual(Object.values(CurrencyCountry));
  });
  it('should return an empty array when CurrencyCountry enum is empty', () => {
    const originalEnum = { ...CurrencyCountry };
    Object.keys(CurrencyCountry).forEach((key) => {
      delete (CurrencyCountry as any)[key];
    });
    const result = getAllCountries();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
    expect(result).toEqual([]);
    (CurrencyCountry as any) = { ...originalEnum };
  });
})
