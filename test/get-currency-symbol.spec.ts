import { getCurrencySymbol } from '@/app';
import { CurrencySymbol } from '@/enums';
import { describe, it, expect,  } from '@jest/globals';

describe('Get Currency Symbol Test', () => {
    it('Should get euro symbol by code', () => {
       expect(getCurrencySymbol('EUR')).toStrictEqual(CurrencySymbol.EUR);
    })
});