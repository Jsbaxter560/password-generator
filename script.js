// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  inputCharLength();
}

function inputCharLength() {
  var length = prompt("How many characters would you like your password to contain?");
  if (length != null) {
    var isnotnumber = isNaN(length);

    if ((length > 7) && (length < 129)) {
      var lowercase = confirm("would you like to use lowercase characters in your password?");
      var uppercase = confirm("would you like to use uppercase characters in your password");
      var numbers = confirm("would you like to include numbers in your password?");
      var special = confirm("would you like to include special characters in your password?");
      var none = (!lowercase && !uppercase && !numbers && !special);
      if (!none) {
        generatePassword(lowercase, uppercase, numbers, special, length);
      }
      else {
        alert("you must select at least one type of character");
      }
    }
    else {
      alert("password must be between 8 and 128 charters long");
    }
  }
}

var lowercase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var uppercase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "~"]


/*
function generatePassword(lowercase, uppercase, numbers, special) {
  if 
 
}
*/
function generatePassword(lowercase, uppercase, numbers, special, length) {
  var charset = "",
    retVal = "";

    var lowerset = "abcdefghijklmnopqrstuvwkyz";
    var upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialset = "!@#$%^&*()_+-=~~||}}[{";
    var numberset = "0123456789";



if (uppercase) {
  charset=charset.concat(upperset);
}

if (lowercase) {
  charset=charset.concat(lowerset);
}

if (numbers) {
  charset=charset.concat(numberset);
}

if (special) {
  charset=charset.concat(specialset);
}







  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  alert(retVal)
  
}

// generateBtn.addEventListener("click", writePassword);

// when criteria confirmed display random examples from corresponding array
// use math floor and math random to generate password from corresponding arrays
// display generated password in alert window or append to page

// make variable of password 8-128 char long


