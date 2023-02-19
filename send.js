let submit=()=>{
  var details = document.getElementById("detail").value;
  var recipientName = document.getElementById("fsname").value;
  var senderCountry = document.getElementById("scountry").value;
  var receiverCountry = document.getElementById("rcountry").value;
  var sentAmount = document.getElementById("amt").value;
  alert("Success!");
}

const fromCurrencyCode = undefined;
const toCurrencyCode = undefined;
const fromCountry = senderCountry;
const toCountry = receiverCountry;
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

const usdHolder = "USD";
// EXCHANGE RATE API - Sender Currency to USD


var myHeaders = new Headers();
myHeaders.append("apikey", "maS5bD8MSB8HDvx37uhRmXodJyHvVdOr");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// Define a variable to store the converted amount
var convertedAmount = undefined;

fetch("https://api.apilayer.com/exchangerates_data/convert?to={usdHolder}&from={fromCountry}&amount={sentAmount}", requestOptions)
  .then(response => response.text())
  .then(result => {
    var tempResponse = JSON.parse(result);
    convertedAmount = tempResponse["result"];
    //console.log(convertedAmount); // Output: 10284.69306
  })
  .catch(error => console.log('error', error))
  .finally(() => {
    console.log('HTTP request is complete'); // This code will execute once the request is complete
    console.log(convertedAmount); // Output: undefined or the converted amount value

    const baseURL = "https://sandbox.checkbook.io/v3/";

    const clientID = "62ead2bf8dee4a26bdfb0df57fc61f6c";
    const key = "db4d9e901d69886bb4bd8ee1b9b0689e"
    const secret = "56b3b7e94035953252fcb1cc0c97e112"
    
    const auth = key + ":" + secret;
    
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: auth
    },
    body: JSON.stringify({
      recipient: details,
      name: recipientName,
      amount: convertedAmount
    })
    };

    fetch(baseURL + "check/digital", options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
      });
