// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  //   var password = generatePassword();

  //  var passwordText = document.querySelector("#password");

  //  passwordText.value = password;


  inputCharLength();
}

function inputCharLength() {
  var length = prompt("How many characters would you like your password to contain?");
  if (length != null) {
    var isnotnumber = isNaN(length);

    if ((length > 7) && (length < 129)) {
      var lowercase = confirm ("would you like to use lowercase characters in your password?");
      var uppercase = confirm ("would you like to use uppercase characters in your password");
      var numbers = confirm ("would you like to include numbers in your password?");
      var special = confirm ("would you like to include special characters in your password?");  

      generatePassword(lowercase, uppercase, numbers, special);
    }
    else {
      alert("password must be between 8 and 128 charters long");
    }
  }
}

function generatePassword(lowercase, uppercase, numbers, special) {
  console.log(lowercase);
  console.log(uppercase);
  console.log(numbers);
  console.log(special);
}








// Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);


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
var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
// make array of uppercase letters
var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
// make array of numbers
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// make array of special characters
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "~"]
