import { getCurrencySymbolByCountry } from '../utils';
import { CurrencySymbol } from '../enums';
import { describe, it, expect } from '@jest/globals';

describe('Get Currency Symbol by Country Test', () => {
  it('should return the correct currency symbol when a valid country is provided', () => {
    const country = 'United States';
    const currencySymbol = getCurrencySymbolByCountry(country);
    expect(currencySymbol).toBe(CurrencySymbol.USD);
  });
  it('should throw an error when an invalid locale code is provided', () => {
    expect(getCurrencySymbolByCountry('invalid-country')).toBe('');
  });
});
