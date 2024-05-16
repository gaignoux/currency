import { describe, expect, it } from '@jest/globals';
import { TCurrencyCode } from '../types';
import { getCurrencyObject } from '../utils';
import { CurrencyCode } from '../enums';

describe('Get Currency Object Test', () => {
  it('should return an object with the correct name, symbol, locale code, and country for a valid currency code', () => {
    const currencyCode: TCurrencyCode = CurrencyCode.USD;
    const currencyObject = getCurrencyObject(currencyCode);

    expect(currencyObject).toEqual({
      name: 'United States Dollar',
      symbol: '$',
      locale: 'en-US',
      country: 'United States',
    });
  });
  it('should throw an error if an invalid currency code is provided', () => {
    expect(() => {
      getCurrencyObject('INVALID' as TCurrencyCode);
    }).toThrowError('Invalid currency code');
  });
});
