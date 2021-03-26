// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// use prompts to extract input from user 
// confirm user criteria for password:
// length of password 8-128 char
// lowercase? T or F
// uppercase? T or F
// numerals? T or F
// special char? T or F
// when criteria confirmed display random examples from corresponding array
// use math floo and math random to generate password from corresponding arrays
// display generated password in alert window or append to page