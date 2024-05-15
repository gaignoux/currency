import { getCurrencySymbol } from '@/app';
import { CurrencySymbol } from '@/enums';
import { TCurrencyCode } from '@/types';
import { describe, it, expect } from '@jest/globals';

describe('Get Currency Symbol Test', () => {
  it('should return the correct currency symbol when given a valid currency code', () => {
    expect(getCurrencySymbol('EUR')).toBe(CurrencySymbol.EUR);
  });
  it('should return undefined when given an invalid currency code', () => {
    expect(getCurrencySymbol('INVALID' as TCurrencyCode)).toBeUndefined();
  });
});
