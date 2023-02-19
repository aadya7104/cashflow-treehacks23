const fromCurrencyCode = undefined;
const toCurrencyCode = undefined;

// converting the name of the country to 3 digit currency code
// this switch statement is for the country from which the transfer originates

switch (fromCountry) {
    case "United Kingdom": fromCurrencyCode = "GBP";
    case "United States": fromCurrencyCode = "USD";
    case "India": fromCurrencyCode = "INR";
    case "Pakistan": fromCurrencyCode = "PKR";
    case "Japan": fromCurrencyCode = "JPY";
    case "Switzerland": fromCurrencyCode = "CHF";
    case "Australia": fromCurrencyCode = "AUD";
    case "Canada": fromCurrencyCode = "CAD";
    case "China": fromCurrencyCode = "CNY";
    case "New Zealand": fromCurrencyCode = "NZD";
    case "Brazil": fromCurrencyCode = "BZR";
    case "Sweden": fromCurrencyCode = "SEK";
    case "South Africa": fromCurrencyCode = "ZAR";
}


// converting the name of the country to 3 digit currency code
// this switch statement is for the country to which the transfer occurs

switch (toCountry) {
    case "United Kingdom": toCurrencyCode = "GBP";
    case "United States": toCurrencyCode = "USD";
    case "India": toCurrencyCode = "INR";
    case "Pakistan": toCurrencyCode = "PKR";
    case "Japan": toCurrencyCode = "JPY";
    case "Switzerland": toCurrencyCode = "CHF";
    case "Australia": toCurrencyCode = "AUD";
    case "Canada": toCurrencyCode = "CAD";
    case "China": toCurrencyCode = "CNY";
    case "New Zealand": toCurrencyCode = "NZD";
    case "Brazil": toCurrencyCode = "BZR";
    case "Sweden": toCurrencyCode = "SEK";
    case "South Africa": toCurrencyCode = "ZAR";
}