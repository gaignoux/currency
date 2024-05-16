import { getCurrencyName } from '../app';
import { TCurrencyCode } from '../types';
import { describe, it, expect } from '@jest/globals';
import { CurrencyCode } from '../enums';

describe('Get Currency Name Test', () => {
  it('should return the name of the currency when a valid currency code is passed as argument', () => {
    const currencyCode: TCurrencyCode = CurrencyCode.USD;
    const currencyName: string = getCurrencyName(currencyCode);
    expect(currencyName).toBe('United States Dollar');
  });
  it('should return undefined when an invalid currency code is passed as argument', () => {
    expect(getCurrencyName('INVALID' as TCurrencyCode)).toBeUndefined();
  });
});
