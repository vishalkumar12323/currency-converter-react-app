const countries = [
  {
    country: "AE",
    code: "AED",
  },
  {
    country: "AF",
    code: "AFN",
  },
  {
    country: "AG",
    code: "XCD",
  },
  {
    country: "AL",
    code: "ALL",
  },
  {
    country: "AM",
    code: "AMD",
  },
  {
    country: "AN",
    code: "ANG",
  },
  {
    country: "AO",
    code: "AOA",
  },
  {
    country: "AQ",
    code: "AQD",
  },
  {
    country: "AR",
    code: "ARS",
  },
  {
    country: "AU",
    code: "AUD",
  },
  {
    country: "AZ",
    code: "AZN",
  },
  {
    country: "BA",
    code: "BAM",
  },
  {
    country: "BB",
    code: "BBD",
  },
  {
    country: "BD",
    code: "BDT",
  },
  {
    country: "BE",
    code: "XOF",
  },
  {
    country: "BG",
    code: "BGN",
  },
  {
    country: "BH",
    code: "BHD",
  },
  {
    country: "BI",
    code: "BIF",
  },
  {
    country: "BM",
    code: "BMD",
  },
  {
    country: "BN",
    code: "BND",
  },
  {
    country: "BO",
    code: "BOB",
  },
  {
    country: "BR",
    code: "BRL",
  },
  {
    country: "BS",
    code: "BSD",
  },
  {
    country: "BV",
    code: "NOK",
  },
  {
    country: "BW",
    code: "BWP",
  },
  {
    country: "BY",
    code: "BYR",
  },
  {
    country: "BZ",
    code: "BZD",
  },
  {
    country: "CA",
    code: "CAD",
  },
  {
    country: "CD",
    code: "CDF",
  },
  {
    country: "CF",
    code: "XAF",
  },
  {
    country: "CH",
    code: "CHF",
  },
  {
    country: "CL",
    code: "CLP",
  },
  {
    country: "CN",
    code: "CNY",
  },
  {
    country: "CO",
    code: "COP",
  },
  {
    country: "CR",
    code: "CRC",
  },
  {
    country: "CU",
    code: "CUP",
  },
  {
    country: "CV",
    code: "CVE",
  },
  {
    country: "CY",
    code: "CYP",
  },
  {
    country: "CZ",
    code: "CZK",
  },
  {
    country: "DJ",
    code: "DJF",
  },
  {
    country: "DK",
    code: "DKK",
  },
  {
    country: "DO",
    code: "DOP",
  },
  {
    country: "DZ",
    code: "DZD",
  },
  {
    country: "EC",
    code: "ECS",
  },
  {
    country: "EE",
    code: "EEK",
  },
  {
    country: "EG",
    code: "EGP",
  },
  {
    country: "ET",
    code: "ETB",
  },
  {
    country: "FR",
    code: "EUR",
  },
  {
    country: "FJ",
    code: "FJD",
  },
  {
    country: "FK",
    code: "FKP",
  },
  {
    country: "GB",
    code: "GBP",
  },
  {
    country: "GE",
    code: "GEL",
  },
  {
    country: "GG",
    code: "GGP",
  },
  {
    country: "GH",
    code: "GHS",
  },
  {
    country: "GI",
    code: "GIP",
  },
  {
    country: "GM",
    code: "GMD",
  },
  {
    country: "GN",
    code: "GNF",
  },
  {
    country: "GT",
    code: "GTQ",
  },
  {
    country: "GY",
    code: "GYD",
  },
  {
    country: "HK",
    code: "HKD",
  },
  {
    country: "HN",
    code: "HNL",
  },
  {
    country: "HR",
    code: "HRK",
  },
  {
    country: "HT",
    code: "HTG",
  },
  {
    country: "HU",
    code: "HUF",
  },
  {
    country: "ID",
    code: "IDR",
  },
  {
    country: "IL",
    code: "ILS",
  },
  {
    country: "IN",
    code: "INR",
  },
  {
    country: "IQ",
    code: "IQD",
  },
  {
    country: "IR",
    code: "IRR",
  },
  {
    country: "IS",
    code: "ISK",
  },
  {
    country: "JM",
    code: "JMD",
  },
  {
    country: "JO",
    code: "JOD",
  },
  {
    country: "JP",
    code: "JPY",
  },
  {
    country: "KE",
    code: "KES",
  },
  {
    country: "KG",
    code: "KGS",
  },
  {
    country: "KH",
    code: "KHR",
  },
  {
    country: "KM",
    code: "KMF",
  },
  {
    country: "KP",
    code: "KPW",
  },
  {
    country: "KR",
    code: "KRW",
  },
  {
    country: "KW",
    code: "KWD",
  },
  {
    country: "KY",
    code: "KYD",
  },
  {
    country: "KZ",
    code: "KZT",
  },
  {
    country: "LA",
    code: "LAK",
  },
  {
    country: "LB",
    code: "LBP",
  },
  {
    country: "LK",
    code: "LKR",
  },
  {
    country: "LR",
    code: "LRD",
  },
  {
    country: "LS",
    code: "LSL",
  },
  {
    country: "LT",
    code: "LTL",
  },
  {
    country: "LV",
    code: "LVL",
  },
  {
    country: "LY",
    code: "LYD",
  },
  {
    country: "MA",
    code: "MAD",
  },
  {
    country: "MD",
    code: "MDL",
  },
  {
    country: "MG",
    code: "MGA",
  },
  {
    country: "MK",
    code: "MKD",
  },
  {
    country: "MM",
    code: "MMK",
  },
  {
    country: "MN",
    code: "MNT",
  },
  {
    country: "MO",
    code: "MOP",
  },
  {
    country: "MR",
    code: "MRO",
  },
  {
    country: "MT",
    code: "MTL",
  },
  {
    country: "MU",
    code: "MUR",
  },
  {
    country: "MV",
    code: "MVR",
  },
  {
    country: "MW",
    code: "MWK",
  },
  {
    country: "MX",
    code: "MXN",
  },
  {
    country: "MY",
    code: "MYR",
  },
  {
    country: "MZ",
    code: "MZN",
  },
  {
    country: "NA",
    code: "NAD",
  },
  {
    country: "NC",
    code: "XPF",
  },
  {
    country: "NG",
    code: "NGN",
  },
  {
    country: "NI",
    code: "NIO",
  },
  {
    country: "NP",
    code: "NPR",
  },
  {
    country: "NZ",
    code: "NZD",
  },
  {
    country: "OM",
    code: "OMR",
  },
  {
    country: "PA",
    code: "PAB",
  },
  {
    country: "PE",
    code: "PEN",
  },
  {
    country: "PG",
    code: "PGK",
  },
  {
    country: "PH",
    code: "PHP",
  },
  {
    country: "PK",
    code: "PKR",
  },
  {
    country: "PL",
    code: "PLN",
  },
  {
    country: "PY",
    code: "PYG",
  },
  {
    country: "QA",
    code: "QAR",
  },
  {
    country: "RO",
    code: "RON",
  },
  {
    country: "RS",
    code: "RSD",
  },
  {
    country: "RU",
    code: "RUB",
  },
  {
    country: "RW",
    code: "RWF",
  },
  {
    country: "SA",
    code: "SAR",
  },
  {
    country: "SB",
    code: "SBD",
  },
  {
    country: "SC",
    code: "SCR",
  },
  {
    country: "SD",
    code: "SDG",
  },
  {
    country: "SE",
    code: "SEK",
  },
  {
    country: "SG",
    code: "SGD",
  },
  {
    country: "SK",
    code: "SKK",
  },
  {
    country: "SL",
    code: "SLL",
  },
  {
    country: "SO",
    code: "SOS",
  },
  {
    country: "SR",
    code: "SRD",
  },
  {
    country: "ST",
    code: "STD",
  },
  {
    country: "SV",
    code: "SVC",
  },
  {
    country: "SY",
    code: "SYP",
  },
  {
    country: "SZ",
    code: "SZL",
  },
  {
    country: "TH",
    code: "THB",
  },
  {
    country: "TJ",
    code: "TJS",
  },
  {
    country: "TM",
    code: "TMT",
  },
  {
    country: "TN",
    code: "TND",
  },
  {
    country: "TO",
    code: "TOP",
  },
  {
    country: "TR",
    code: "TRY",
  },
  {
    country: "TT",
    code: "TTD",
  },
  {
    country: "TW",
    code: "TWD",
  },
  {
    country: "TZ",
    code: "TZS",
  },
  {
    country: "UA",
    code: "UAH",
  },
  {
    country: "UG",
    code: "UGX",
  },
  {
    country: "US",
    code: "USD",
  },
  {
    country: "UY",
    code: "UYU",
  },
  {
    country: "UZ",
    code: "UZS",
  },
  {
    country: "VE",
    code: "VEF",
  },
  {
    country: "VN",
    code: "VND",
  },
  {
    country: "VU",
    code: "VUV",
  },
  {
    country: "YE",
    code: "YER",
  },
  {
    country: "ZA",
    code: "ZAR",
  },
  {
    country: "ZM",
    code: "ZMK",
  },
  {
    country: "ZW",
    code: "ZWD",
  },
];

export { countries };
