# Currency Localization Package

## Installation

To install the package you can use npm or yarn:

```bash
npm install @gaignoux/currency
```

or

```bash
yarn add @gaignoux/currency
```

## Usage

The package provides several useful functions for obtaining currency information. Here's an example of how to use it:

```typescript
// ES5
const { getCurrencyName } = require('@gaignoux/currency');
// ES6
import {
  getCurrencySymbol,
  getCurrencyCountry,
  getCurrencyLocaleCode,
  getCurrencySymbolByLocale,
  getCurrencySymbolByCountry,
  getAllCodes,
  getAllNames,
  getAllSymbols,
  getAllLocales,
  getCurrencyObject,
} from '@gaignoux/currency';

const currencyCode = 'USD';

console.log('Name:', getCurrencyName(currencyCode));
console.log('Symbol:', getCurrencySymbol(currencyCode));
console.log('Country:', getCurrencyCountry(currencyCode));
console.log('Locale Code:', getCurrencyLocaleCode('en-US'));
console.log('Symbol by Locale:', getCurrencySymbolByLocale('en-US'));
console.log('Symbol by Country:', getCurrencySymbolByCountry('United States'));
console.log('All Codes:', getAllCodes());
console.log('All Names:', getAllNames());
console.log('All Symbols:', getAllSymbols());
console.log('All Locales:', getAllLocales());
console.log('Currency Object:', getCurrencyObject(currencyCode));
```

## Available methods

- `getCurrencySymbol(code: TCurrencyCode): string`: Returns the currency symbol based on the currency code.
- `getCurrencyName(code: TCurrencyCode): string`: Returns the currency name based on the currency code.
- `getCurrencyCountry(code: TCurrencyCode): string`: Returns the country associated with a currency based on the currency code.
- `getCurrencyLocaleCode(locale: TCurrencyLocalCode): string`: Returns the locale code associated with a currency or an array of them based on the locale code.
- `getCurrencySymbolByLocale(locale: TCurrencyLocalCode): string`: Returns the currency symbol or an array of them based on the locale code.
- `getCurrencySymbolByCountry(country: string): string`: Returns the currency symbol based on the country.
- `getAllCodes(): string[]`: Returns all available currency codes.
- `getAllNames(): string[]`: Returns all available currency names.
- `getAllSymbols(): string[]`: Returns all available currency symbols.
- `getAllLocales(): string[]`: Returns all available locale codes.
- `getCurrencyObject(code: TCurrencyCode): TCurrency`: Returns an object containing complete information about a currency based on the currency code.

## Type information

With this package, you can use the available enums and types, such as:

### Types

#### TCurrency

> The type is used to represent complete currency data, including name, symbol, locale code, and associated country.

The type consists of the following fields:

- `name: CurrencyName`: The currency name.
- `symbol: CurrencySymbol`: The currency symbol.
- `locale: CurrencyCodeLocale`: The locale code associated with the currency.
- `country: CurrencyCountry`: The country associated with the currency.

#### TCurrencyCode

> Type with all available currency codes

#### TCurrencyLocalCode

> Type with all available locale codes

#### TCurrencySymbol

> Type with all available currency symbols

### Enums

#### CurrencySymbol

> Relationship between the currency code and its symbol.

#### CurrencyName

> Relationship between the currency code and its name

#### CurrencyCode

> All currency code available.

#### CurrencyLocale

> All currency locale available.

#### CurrencyCodeLocale

> Relationship between the currency code and its locale code.

#### CurrencyCountry

> Relationship between the currency code and the country that uses it.

## Contribute

Feel free to contribute or fork, but the purpose of this package is to be a hub of information that is often difficult to find elsewhere and is used daily in development. Clone it, make your changes, respect the organization, write a test to cover the change, and submit the PR.
