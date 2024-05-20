# Currency Localization Package

A way to get all currency information from around the world.

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

## Countries covered

| Locale Code | Country                               |
|-------------|---------------------------------------|
| ar-AE       | United Arab Emirates                  |
| ps-AF       | Afghanistan                           |
| sq-AL       | Albania                               |
| hy-AM       | Armenia                               |
| nl-AW       | Aruba                                 |
| pt-AO       | Angola                                |
| es-AR       | Argentina                             |
| en-AU       | Australia                             |
| az-AZ       | Azerbaijan                            |
| bs-BA       | Bosnia and Herzegovina                |
| en-BB       | Barbados                              |
| bn-BD       | Bangladesh                            |
| bg-BG       | Bulgaria                              |
| ar-BH       | Bahrain                               |
| fr-BI       | Burundi                               |
| en-BM       | Bermuda                               |
| ms-BN       | Brunei Darussalam                     |
| es-BO       | Bolivia                               |
| pt-BR       | Brazil                                |
| en-BS       | Bahamas                               |
| dz-BT       | Bhutan                                |
| en-BW       | Botswana                              |
| be-BY       | Belarus                               |
| en-BZ       | Belize                                |
| en-CA       | Canada                                |
| fr-CD       | Democratic Republic of the Congo      |
| de-CH       | Switzerland                           |
| es-CL       | Chile                                 |
| zh-CN       | China                                 |
| es-CO       | Colombia                              |
| es-CR       | Costa Rica                            |
| es-CU       | Cuba                                  |
| pt-CV       | Cabo Verde                            |
| cs-CZ       | Czech Republic                        |
| fr-DJ       | Djibouti                              |
| da-DK       | Denmark                               |
| es-DO       | Dominican Republic                    |
| ar-DZ       | Algeria                               |
| ar-EG       | Egypt                                 |
| ti-ER       | Eritrea                               |
| am-ET       | Ethiopia                              |
| en-GB       | United Kingdom                        |
| en-FJ       | Fiji                                  |
| en-FK       | Falkland Islands (Malvinas)           |
| ka-GE       | Georgia                               |
| en-GH       | Ghana                                 |
| en-GI       | Gibraltar                             |
| en-GM       | Gambia                                |
| fr-GN       | Guinea                                |
| es-GT       | Guatemala                             |
| en-GY       | Guyana                                |
| zh-HK       | Hong Kong                             |
| es-HN       | Honduras                              |
| hr-HR       | Croatia                               |
| ht-HT       | Haiti                                 |
| hu-HU       | Hungary                               |
| id-ID       | Indonesia                             |
| he-IL       | Israel                                |
| hi-IN       | India                                 |
| ar-IQ       | Iraq                                  |
| fa-IR       | Iran                                  |
| is-IS       | Iceland                               |
| en-JM       | Jamaica                               |
| ar-JO       | Jordan                                |
| ja-JP       | Japan                                 |
| sw-KE       | Kenya                                 |
| ky-KG       | Kyrgyzstan                            |
| km-KH       | Cambodia                              |
| ar-KM       | Comoros                               |
| ko-KP       | Democratic People's Republic of Korea |
| ko-KR       | Republic of Korea                     |
| ar-KW       | Kuwait                                |
| en-KY       | Cayman Islands                        |
| kk-KZ       | Kazakhstan                            |
| lo-LA       | Laos                                  |
| ar-LB       | Lebanon                               |
| si-LK       | Sri Lanka                             |
| en-LR       | Liberia                               |
| st-LS       | Lesotho                               |
| lt-LT       | Lithuania                             |
| lv-LV       | Latvia                                |
| ar-LY       | Libya                                 |
| ar-MA       | Morocco                               |
| ro-MD       | Moldova                               |
| mg-MG       | Madagascar                            |
| mk-MK       | North Macedonia                       |
| my-MM       | Myanmar                               |
| mn-MN       | Mongolia                              |
| zh-MO       | Macao                                 |
| ar-MR       | Mauritania                            |
| en-MU       | Mauritius                             |
| dv-MV       | Maldives                              |
| ny-MW       | Malawi                                |
| es-MX       | Mexico                                |
| ms-MY       | Malaysia                              |
| pt-MZ       | Mozambique                            |
| af-NA       | Namibia                               |
| ig-NG       | Nigeria                               |
| es-NI       | Nicaragua                             |
| nb-NO       | Norway                                |
| ne-NP       | Nepal                                 |
| en-NZ       | New Zealand                           |
| ar-OM       | Oman                                  |
| es-PA       | Panama                                |
| es-PE       | Peru                                  |
| en-PG       | Papua New Guinea                      |
| en-PH       | Philippines                           |
| ur-PK       | Pakistan                              |
| pl-PL       | Poland                                |
| es-PY       | Paraguay                              |
| ar-QA       | Qatar                                 |
| ro-RO       | Romania                               |
| sr-RS       | Serbia                                |
| ru-RU       | Russia                                |
| rw-RW       | Rwanda                                |
| ar-SA       | Saudi Arabia                          |
| en-SB       | Solomon Islands                       |
| en-SC       | Seychelles                            |
| ar-SD       | Sudan                                 |
| sv-SE       | Sweden                                |
| en-SG       | Singapore                             |
| en-SH       | Saint Helena                          |
| en-SL       | Sierra Leone                          |
| so-SO       | Somalia                               |
| nl-SR       | Suriname                              |
| en-SS       | South Sudan                           |
| pt-ST       | Sao Tome and Principe                 |
| ar-SY       | Syria                                 |
| ss-SZ       | Eswatini                              |
| th-TH       | Thailand                              |
| tg-TJ       | Tajikistan                            |
| tk-TM       | Turkmenistan                          |
| ar-TN       | Tunisia                               |
| to-TO       | Tonga                                 |
| tr-TR       | Turkey                                |
| en-TT       | Trinidad and Tobago                   |
| zh-TW       | Taiwan                                |
| sw-TZ       | Tanzania                              |
| uk-UA       | Ukraine                               |
| sw-UG       | Uganda                                |
| en-US       | United States of America              |
| es-UY       | Uruguay                               |
| uz-UZ       | Uzbekistan                            |
| es-VE       | Venezuela                             |
| vi-VN       | Vietnam                               |
| en-VU       | Vanuatu                               |
| sm-WS       | Samoa                                 |
| fr-CM       | Cameroon                              |
| en          | Global (Generic)                      |
| en-VC       | Saint Vincent and the Grenadines      |
| fr-BJ       | Benin                                 |
| fr-PF       | French Polynesia                      |
| ar-YE       | Yemen                                 |
| zu-ZA       | South Africa                          |
| en-ZM       | Zambia                                |
| nl-BE       | Belgium                               |
| nl-NL       | Netherlands                           |
| pt-PT       | Portugal                              |
| es-ES       | Spain                                 |
| fr-BE       | Belgium (French)                      |
| fr-FR       | France                                |
| it-IT       | Italy                                 |
| de-DE       | Germany                               |
| de-AT       | Austria                               |
| el-GR       | Greece                                |
| ee-EE       | Estonia                               |
| fi-FI       | Finland                               |
| ga-IE       | Ireland                               |
| mt-MT       | Malta                                 |
| sk-SK       | Slovakia                              |
| sl-SI       | Slovenia                              |
| fr-LU       | Luxembourg                            |
| de-LU       | Luxembourg (German)                   |
| lb-LU       | Luxembourg (Letzeburgesch)            |
| cy-CY       | Cyprus                                |
| ad-AD       | Andorra                               |
| al-AL       | Albania                               |
| by-BY       | Belarus                               |
| ba-BA       | Bosnia and Herzegovina (Bosnian)      |
| cz-CZ       | Czech Republic                        |
| dk-DK       | Denmark                               |
| fo-FO       | Faroe Islands                         |
| gi-GI       | Gibraltar                             |
| il-IL       | Israel                                |
| xk-XK       | Kosovo                                |
| li-LI       | Liechtenstein                         |
| lu-LU       | Luxembourg                            |
| md-MD       | Moldova                               |
| mc-MC       | Monaco                                |
| me-ME       | Montenegro                            |
| no-NO       | Norway                                |
| rs-RS       | Serbia                                |
| sm-SM       | San Marino                            |
| si-SI       | Slovenia                              |
| se-SE       | Sweden                                |
| ch-CH       | Switzerland                           |
| ua-UA       | Ukraine                               |
| va-VA       | Vatican City                          |

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
- `locale: TCurrencyLocalCode | TCurrencyLocalCode[]`: The locale code associated with the currency.
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

#### CurrencyCountry

> Relationship between the currency code and the country that uses it.

### Constants

#### CurrencyLocaleCode

> Relationship between the locale code and its currency code.

#### CurrencyCodeLocale

> Relationship between the currency code and its locale code.

## Contribute

Feel free to contribute or fork, but the purpose of this package is to be a hub of information that is often difficult to find elsewhere and is used daily in development. Clone it, make your changes, respect the organization, write a test to cover the change, and submit the PR.
