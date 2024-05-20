import { CurrencyCountry, CurrencyName, CurrencySymbol } from '../enums';

/**
 * The type is used to represent complete currency data, including name, symbol, locale code, and associated country.
 */
export type TCurrency = {
  name: CurrencyName;
  symbol: CurrencySymbol;
  locale: TCurrencyLocalCode | TCurrencyLocalCode[];
  country: CurrencyCountry;
};

/**
 * Type with all available currency codes
 */
export type TCurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'USS'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XFU'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XTS'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMW';

/**
 * Type with all available locale codes
 */
export type TCurrencyLocalCode =
  | 'ar-AE' // United Arab Emirates
  | 'ps-AF' // Afghanistan
  | 'sq-AL' // Albania
  | 'hy-AM' // Armenia
  | 'nl-AW' // Aruba
  | 'pt-AO' // Angola
  | 'es-AR' // Argentina
  | 'en-AU' // Australia
  | 'az-AZ' // Azerbaijan
  | 'bs-BA' // Bosnia and Herzegovina
  | 'en-BB' // Barbados
  | 'bn-BD' // Bangladesh
  | 'bg-BG' // Bulgaria
  | 'ar-BH' // Bahrain
  | 'fr-BI' // Burundi
  | 'en-BM' // Bermuda
  | 'ms-BN' // Brunei
  | 'es-BO' // Bolivia
  | 'pt-BR' // Brazil
  | 'en-BS' // Bahamas
  | 'dz-BT' // Bhutan
  | 'en-BW' // Botswana
  | 'be-BY' // Belarus
  | 'en-BZ' // Belize
  | 'en-CA' // Canada
  | 'fr-CD' // Democratic Republic of the Congo
  | 'de-CH' // Switzerland
  | 'fr-CH' // Switzerland
  | 'es-CL' // Chile
  | 'zh-CN' // China
  | 'es-CO' // Colombia
  | 'es-CR' // Costa Rica
  | 'es-CU' // Cuba
  | 'pt-CV' // Cape Verde
  | 'cs-CZ' // Czech Republic
  | 'fr-DJ' // Djibouti
  | 'da-DK' // Denmark
  | 'es-DO' // Dominican Republic
  | 'ar-DZ' // Algeria
  | 'ar-EG' // Egypt
  | 'ti-ER' // Eritrea
  | 'am-ET' // Ethiopia
  | 'en-GB' // United Kingdom
  | 'en-FJ' // Fiji
  | 'en-FK' // Falkland Islands
  | 'ka-GE' // Georgia
  | 'en-GH' // Ghana
  | 'en-GI' // Gibraltar
  | 'en-GM' // Gambia
  | 'fr-GN' // Guinea
  | 'es-GT' // Guatemala
  | 'en-GY' // Guyana
  | 'zh-HK' // Hong Kong
  | 'es-HN' // Honduras
  | 'hr-HR' // Croatia
  | 'ht-HT' // Haiti
  | 'hu-HU' // Hungary
  | 'id-ID' // Indonesia
  | 'he-IL' // Israel
  | 'hi-IN' // India
  | 'ar-IQ' // Iraq
  | 'fa-IR' // Iran
  | 'is-IS' // Iceland
  | 'en-JM' // Jamaica
  | 'ar-JO' // Jordan
  | 'ja-JP' // Japan
  | 'sw-KE' // Kenya
  | 'ky-KG' // Kyrgyzstan
  | 'km-KH' // Cambodia
  | 'ar-KM' // Comoros
  | 'ko-KP' // North Korea
  | 'ko-KR' // South Korea
  | 'ar-KW' // Kuwait
  | 'en-KY' // Cayman Islands
  | 'kk-KZ' // Kazakhstan
  | 'lo-LA' // Laos
  | 'ar-LB' // Lebanon
  | 'si-LK' // Sri Lanka
  | 'en-LR' // Liberia
  | 'st-LS' // Lesotho
  | 'lt-LT' // Lithuania
  | 'lv-LV' // Latvia
  | 'ar-LY' // Libya
  | 'ar-MA' // Morocco
  | 'ro-MD' // Moldova
  | 'mg-MG' // Madagascar
  | 'mk-MK' // North Macedonia
  | 'my-MM' // Myanmar
  | 'mn-MN' // Mongolia
  | 'zh-MO' // Macau
  | 'ar-MR' // Mauritania
  | 'en-MU' // Mauritius
  | 'dv-MV' // Maldives
  | 'ny-MW' // Malawi
  | 'es-MX' // Mexico
  | 'ms-MY' // Malaysia
  | 'pt-MZ' // Mozambique
  | 'af-NA' // Namibia
  | 'ig-NG' // Nigeria
  | 'es-NI' // Nicaragua
  | 'nb-NO' // Norway
  | 'ne-NP' // Nepal
  | 'en-NZ' // New Zealand
  | 'ar-OM' // Oman
  | 'es-PA' // Panama
  | 'es-PE' // Peru
  | 'en-PG' // Papua New Guinea
  | 'en-PH' // Philippines
  | 'ur-PK' // Pakistan
  | 'pl-PL' // Poland
  | 'es-PY' // Paraguay
  | 'ar-QA' // Qatar
  | 'ro-RO' // Romania
  | 'sr-RS' // Serbia
  | 'ru-RU' // Russia
  | 'rw-RW' // Rwanda
  | 'ar-SA' // Saudi Arabia
  | 'en-SB' // Solomon Islands
  | 'en-SC' // Seychelles
  | 'ar-SD' // Sudan
  | 'sv-SE' // Sweden
  | 'en-SG' // Singapore
  | 'en-SH' // Saint Helena
  | 'en-SL' // Sierra Leone
  | 'so-SO' // Somalia
  | 'nl-SR' // Suriname
  | 'en-SS' // South Sudan
  | 'pt-ST' // Sao Tome and Principe
  | 'ar-SY' // Syria
  | 'ss-SZ' // Eswatini
  | 'th-TH' // Thailand
  | 'tg-TJ' // Tajikistan
  | 'tk-TM' // Turkmenistan
  | 'ar-TN' // Tunisia
  | 'to-TO' // Tonga
  | 'tr-TR' // Turkey
  | 'en-TT' // Trinidad and Tobago
  | 'zh-TW' // Taiwan
  | 'sw-TZ' // Tanzania
  | 'uk-UA' // Ukraine
  | 'sw-UG' // Uganda
  | 'en-US' // United States
  | 'es-UY' // Uruguay
  | 'uz-UZ' // Uzbekistan
  | 'es-VE' // Venezuela
  | 'vi-VN' // Vietnam
  | 'en-VU' // Vanuatu
  | 'sm-WS' // Samoa
  | 'fr-CM' // Cameroon
  | 'en' // Generic English
  | 'en-VC' // Saint Vincent and the Grenadines
  | 'fr-BJ' // Benin
  | 'fr-PF' // French Polynesia
  | 'ar-YE' // Yemen
  | 'zu-ZA' // South Africa
  | 'en-ZM' // Zambia
  | 'nl-BE' // Belgium
  | 'nl-NL' // Netherlands
  | 'pt-PT' // Portugal
  | 'es-ES' // Spain
  | 'fr-BE' // Belgium
  | 'fr-FR' // France
  | 'it-IT' // Italy
  | 'de-DE' // Germany
  | 'de-AT' // Austria
  | 'el-GR' // Greece
  | 'ee-EE' // Estonia
  | 'fi-FI' // Finland
  | 'ga-IE' // Ireland
  | 'mt-MT' // Malta
  | 'sk-SK' // Slovakia
  | 'sl-SI' // Slovenia
  | 'fr-LU' // Luxembourg
  | 'de-LU' // Luxembourg
  | 'lb-LU' // Luxembourgish
  | 'cy-CY' // Cyprus
  | 'ad-AD' // Andorra
  | 'al-AL' // Albania
  | 'by-BY' // Belarus
  | 'ba-BA' // Bosnia and Herzegovina
  | 'cz-CZ' // Czech Republic
  | 'dk-DK' // Denmark
  | 'fo-FO' // Faroe Islands
  | 'gi-GI' // Gibraltar
  | 'il-IL' // Israel
  | 'xk-XK' // Kosovo
  | 'li-LI' // Liechtenstein
  | 'lu-LU' // Luxembourg
  | 'md-MD' // Moldova
  | 'mc-MC' // Monaco
  | 'me-ME' // Montenegro
  | 'no-NO' // Norway
  | 'rs-RS' // Serbia
  | 'sm-SM' // San Marino
  | 'si-SI' // Slovenia
  | 'se-SE' // Sweden
  | 'ch-CH' // Switzerland
  | 'ua-UA' // Ukraine
  | 'va-VA'; // Vatican City

/**
 * Type with all available currency symbols
 */
export type TCurrencySymbol =
  | 'د.إ'
  | '؋'
  | 'L'
  | '֏'
  | 'ƒ'
  | 'Kz'
  | '$'
  | '$'
  | 'ƒ'
  | '₼'
  | 'KM'
  | '$'
  | '৳'
  | 'лв'
  | 'د.ب'
  | 'FBu'
  | '$'
  | '$'
  | 'Bs.'
  | 'BOV'
  | 'R$'
  | '$'
  | 'Nu.'
  | 'P'
  | 'Br'
  | 'BZ$'
  | '$'
  | 'FC'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | '$'
  | '¥'
  | '$'
  | 'COU'
  | '₡'
  | '$'
  | '$'
  | '$'
  | 'Kč'
  | 'Fdj'
  | 'kr'
  | 'RD$'
  | 'دج'
  | '£'
  | 'Nfk'
  | 'Br'
  | '€'
  | '$'
  | '£'
  | '£'
  | '₾'
  | '₵'
  | '£'
  | 'D'
  | 'FG'
  | 'Q'
  | '$'
  | '$'
  | 'L'
  | 'kn'
  | 'G'
  | 'Ft'
  | 'Rp'
  | '₪'
  | '₹'
  | 'د.ع'
  | '﷼'
  | 'kr'
  | '$'
  | 'د.ا'
  | '¥'
  | 'Ksh'
  | 'сом'
  | '៛'
  | 'CF'
  | '₩'
  | '₩'
  | 'د.ك'
  | '$'
  | '₸'
  | '₭'
  | '£'
  | 'රු'
  | '$'
  | 'M'
  | 'Lt'
  | 'Ls'
  | 'ل.د'
  | 'MAD'
  | 'L'
  | 'Ar'
  | 'ден'
  | 'K'
  | '₮'
  | 'MOP$'
  | 'UM'
  | '₨'
  | 'ރ.'
  | 'MK'
  | '$'
  | 'MXV'
  | 'RM'
  | 'MT'
  | '$'
  | '₦'
  | 'C$'
  | 'kr'
  | '₨'
  | '$'
  | 'ر.ع.'
  | 'B/.'
  | 'S/'
  | 'K'
  | '₱'
  | '₨'
  | 'zł'
  | '₲'
  | 'ر.ق'
  | 'lei'
  | 'дин.'
  | '₽'
  | 'FRw'
  | 'ر.س'
  | '$'
  | '₨'
  | 'ج.س.'
  | 'kr'
  | '$'
  | '£'
  | 'Le'
  | 'S'
  | '$'
  | '£'
  | 'Db'
  | '£'
  | 'E'
  | '฿'
  | 'ЅМ'
  | 'T'
  | 'د.ت'
  | 'T$'
  | '₺'
  | 'TT$'
  | 'NT$'
  | 'TSh'
  | '₴'
  | 'USh'
  | '$'
  | 'USN'
  | 'USS'
  | 'UYI'
  | '$U'
  | 'лв'
  | 'Bs.'
  | '₫'
  | 'VT'
  | 'WS$'
  | 'FCFA'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | '$'
  | 'XDR'
  | 'XFU'
  | 'CFA'
  | 'XPD'
  | '₣'
  | 'XPT'
  | 'XTS'
  | 'XXX'
  | '﷼'
  | 'R'
  | 'ZK';
