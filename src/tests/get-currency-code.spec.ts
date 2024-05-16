import { getCurrencyCountry } from '../utils';
import { TCurrencyCode } from '../types';
import { describe, it, expect } from '@jest/globals';

describe('Get Currency Code Test', () => {
  it('should return the country name when a valid currency code is provided', () => {
    const currencyCode: TCurrencyCode = 'USD';
    const country = getCurrencyCountry(currencyCode);
    expect(country).toBe('United States');
  });
  it('should return undefined when an invalid currency code is provided', () => {
    expect(getCurrencyCountry('INVALID' as TCurrencyCode)).toBeUndefined();
  });
});
