// Assignment code here


var plength = prompt("How many characters would you like your Password to be?");

if (plength < 8 || plength > 128) {
  prompt("Length must be between 8-128 characters")
  var upperCase = confirm("Do you want Uppercase Letters?");
  var lowerCase = confirm("Do you want Lowercase Letters?");
  var numbers = confirm("Do you want Numbers?");
  var symbols = confirm("Do you want Special Characters?")
}

else if (plength >= 8 && plenght <= 128)


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  var symbols = '!@#$%^&';
  return symbols[Math.floor(Math.random() * symbols.length)];
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


