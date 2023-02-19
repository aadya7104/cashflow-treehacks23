/*
const fromCurrencyCode = undefined;
const toCurrencyCode = undefined;
const fromCountry = "United Kingdom";
const toCountry = "United States of America"
// converting the name of the country to 3 digit currency code
// this switch statement is for the country from which the transfer originates

switch (fromCountry) {
    case "United Kingdom": fromCurrencyCode = "GBP";
    case "United States of America": fromCurrencyCode = "USD";
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
    case "United States of America": toCurrencyCode = "USD";
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

*/

const baseURL = "https://sandbox.checkbook.io/v3/";

const clientID = "62ead2bf8dee4a26bdfb0df57fc61f6c";
const key = "db4d9e901d69886bb4bd8ee1b9b0689e"
const secret = "56b3b7e94035953252fcb1cc0c97e112"

const auth = key + ":" + secret;

// add a bank account 

const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: auth
    },
    body: JSON.stringify({routing: '021000021', account: '12340000', type: 'CHECKING'})
  };
  
  fetch(baseURL+"bank", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));