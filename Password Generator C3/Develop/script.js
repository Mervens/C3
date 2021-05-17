// Assignment code here

var charSet = [
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
var passL = passL(window.prompt("What length do you want? 8-128 characters."));

}

generatePassword.onclick = userPrompts();
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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





/*let randomCharString = "";
let charSet = [
    {
        char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        name: "Special Characters",
        use: false
    },
    {
        char: "0123456789",
        name: "Number Characters",
        use: false
    },
    {
        char: "abcdefghijklmnopqrstuvwxyz",
        name: "Lowercase Letters",
        use: false
    },
    {
        char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        name: "Uppercase Letters",
        use: false
    }
]

//prompt user to pick a password length between 8 and 128 characters


const generate = () => {
    let passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
    let passwordString = "";

    //check if password is long enough
    if (passwordLength > 8 && passwordLength < 128) {
        charSet.forEach(set => {
            const useChar = (prompt(`Do you want to use ${set.name}?`)).toLowerCase();
            if (useChar === "yes" || useChar === "y") {
                set.use = true;
            }
            if(set.use){
                randomCharString = randomCharString + set.char;
            }
        });
        console.log(JSON.stringify(charSet))
    }
    else {
        alert("Your password does not meet the requirements. Please refresh and try again.");
    }

    //generate random password based on characters the user wants to use 
    if (randomCharString !== "") {
        for (i = 1; i <= passwordLength; i++) {
            passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
        }

        document.getElementById("password").value = passwordString;
    }
    else {
        alert("You must use at least one kind of character. Please refresh and try again.");
    }
}

const copy = () => {
    const copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Your password has been copied to the clipboard.");
}
*/