let submit=()=>{
  var routingNumber= document.getElementById("routing").value;
  var accountNumber = document.getElementById("account").value;
  var type = document.getElementById("type").value;
var accType = "";
if(type == 1){
  accType = "CHECKING";
}
else if(type == 2){
  accType = "SAVINGS";
}
else{
  accType = "BUSINESS";
}
}


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
    body: JSON.stringify({routing: routingNumber, account: accountNumber, type: accType})
  };
  
  fetch(baseURL+"bank", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  console.log(response['id'])