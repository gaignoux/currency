import { describe, expect, it } from '@jest/globals';
import { getAllSymbols } from '../utils';
import { CurrencySymbol } from '../enums';

describe('Get All Symbols Test', () => {
  it('should return an array of all currency symbols', () => {
    const symbols = getAllSymbols();
    expect(Array.isArray(symbols)).toBe(true);
    expect(symbols.length).toBe(Object.values(CurrencySymbol).length);
  });
  it('should return an empty array when CurrencySymbol enum is empty', () => {
    const originalEnum = Object.assign({}, CurrencySymbol);
    Object.keys(CurrencySymbol).forEach((key) => {
      delete (CurrencySymbol as any)[key];
    });
    const symbols = getAllSymbols();
    expect(Array.isArray(symbols)).toBe(true);
    expect(symbols.length).toBe(0);
    Object.assign(CurrencySymbol, originalEnum);
  });
});
