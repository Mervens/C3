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
alert("Click Generate Password to begin.");
}


const generate = () => {
    let passL = prompt("What length do you want? 8-128 characters.");
    let passS = "";

if (passL > 8 && passL < 128) {
    characterSet.forEach(set => {
    const insChar = (prompt(`Do you want to use ${set.name}?`)).toLowerCase();
    if (insChar === "yes" || insChar === "y") {
        set.use = true;
    }else{
        alert("Then we will not use this item.");
        return
    }
    if(set.use){
        randChar = randChar + set.char;
    }else{
        alert("You have not entered any conditions. This is invalid.");
        return
    }
    }
    );
    }else{
        alert("Your password does not fit between 8-128. Try again.");
        return
    }

if (randChar !== "") {
    for (i = 1; i <= passL; i++) {
        password = passS + randChar.charAt(Math.floor(Math.random() * Math.floor((randChar.length) - 1)));
    }
    document.getElementById("password").value = passS;
}
else {
    alert("There are no characters inputted. Password cannot be generated.");
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    userI = "";
    finalP = "";
    display = "";
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    bclick = document.getElementById('generate');
    bclick.onclick = clicked;

  passwordText.value = password;

}

function clicked() {
     const div = document.createElement('div');
     div.textContent = 'Generated';
     document.body.appendChild(div);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


