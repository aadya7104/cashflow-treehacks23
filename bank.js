let submit=()=>{
  var routing= document.getElementById("routing").value;
  var account = document.getElementById("account").value;
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
