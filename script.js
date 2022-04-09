var charArray = [];
charArray.length = 95;

function getNumCharacters() {
  var numCharacters = window.prompt("How many characters should the password be? Enter a value between 8 and 128.");
  numCharacters = parseInt(numCharacters);
  if (numCharacters < 8 || numCharacters > 128 || !numCharacters) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getNumCharacters();
  }
  return numCharacters;
}


function chooseCharacters() {
  var useLower = window.confirm("Use lower case letters?");
  if (useLower === true) {
    for (let i = 65; i < 91; i++) {
        charArray[i]= String.fromCharCode(i + 32);
    }
  }
  var useUpper = window.confirm("Use upper case letters?");
  if (useUpper === true) {
    for (let i = 33; i < 59; i++) {
        charArray[i]= String.fromCharCode(i + 32);
    }
  }
  var useNum = window.confirm("Use numbers?");
  if (useNum === true) {
    for (let i = 16; i < 26; i++) {
        charArray[i]= String.fromCharCode(i + 32);
    }
  }
  var useSpecial = window.confirm("Use special characters?");
  if (useSpecial === true) {
    for (let i = 0; i < 16; i++) {
        charArray[i]= String.fromCharCode(i + 32);
    }
    for (let i = 26; i < 33; i++) {
      charArray[i]= String.fromCharCode(i + 32);
    } 
    for (let i = 59; i < 65; i++) {
      charArray[i]= String.fromCharCode(i + 32);
    }
    for (let i = 91; i < 95; i++) {
      charArray[i]= String.fromCharCode(i + 32);
    }
  }
  
  charArray = charArray.flat();

  if (charArray.length < 10) {
    window.alert("You need to provide a valid answer! Choose at least one option. Please try again.");
    return chooseCharacters();
  }
 
  console.log(charArray);
  return charArray;
}

function generatePassword() {
  var pwordLength = getNumCharacters();
  charArray = chooseCharacters();
  
  var password = "";
  while (password.length < pwordLength) {
    password = password + charArray[Math.floor(Math.random() * charArray.length)];
  }

  return password;
 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

