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
// use math floor and math random to generate password from corresponding arrays
// display generated password in alert window or append to page

// make variable of password 8-128 char long
// make array of lowercase letters
// make array of uppercase letters
// make array of numbers
// make array of special characters

var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D" ,"F" ,"G" ,"H" ,"J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "~"]
