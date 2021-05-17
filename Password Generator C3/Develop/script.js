// Assignment code here
let randChar = "";
let characterSet = [
  {
  char: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  name: "Letters",
  use: false
  },{
  char: "0123456789",
  name: "Numbers",
  use: false
  },{
  char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  name: "Symbols",
  use: false
  }
]

var userI = "";
var finalP = "";
var display = "";

window.alert("Welcome to the Password Generator Challenge Assignment!");

function userPrompts() {
alert("Let's begin!");
alert("Acceptable units for this generator are letters, numbers, and/or symbols.");
alert("Let's set the length of your password.");
var passL = prompt("What length do you want? 8-128 characters.");
if (passL > 8 && passL < 128) {
    characterSet.forEach(set => {
    const insChar = (prompt('Do you want to use ${set.name}?')).toLowerCase();
    if (insChar === "yes" || insChar === "y") {
        set.use = true;
    }
    if(set.use){
        randChar = randChar + set.char;
    }
    });
 
}else{
alert("Your password does not fit between 8-128. Try again.");
return
}
};

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

document.getElementById('#generate').onclick =  userPrompts();

// Write password to the #password input
function writePassword() {
  userI = "";
  finalP = "";
  display = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


