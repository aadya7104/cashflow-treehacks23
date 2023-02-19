let submit=()=>{
  var emailId= document.getElementById("email").value;
  var sender = document.getElementById("fsname").value;
  var country = document.getElementById("country").value;
var amount = document.getElementById("amt").value;
var description = document.getElementById("desc").value;
  alert("Success!");
}

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
    amount: amount,
    description: description,
    name: sender,
    recipient: emailId
  })
};

fetch(baseURL+"invoice", options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));