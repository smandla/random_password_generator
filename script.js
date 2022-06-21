// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

/**
 * variables to save user input
 */
let savedPasswordLength;

/**
 * Function to fully generate random password based on user input from prompts
 */
function generatePassword() {
  /**
   * First prompt once generateBtn is clicked
   * Function that saves user input for password length
   */
  function lengthInputPrompt() {
    /** Prompt User to input password length */
    let passwordLengthInput = prompt(
      "Please choose the number of characters you'd like your password to generate (8 - 128 characters)"
    );
    console.log(passwordLengthInput);
    /** If input length is 0 or input is null, re-alert user */
    if (passwordLengthInput.length === 0 || passwordLengthInput === null) {
      alert(
        "Can't generate password without choosing number of characters! Please retry!"
      );
      /** Call function again */
      lengthInputPrompt();
    } else if (passwordLengthInput < 8 || passwordLengthInput > 128) {
      /** Else if the input is < 8 or > 128, re-alert user */
      alert(
        "Can't generate password with < 8 or > 128 characters! Please retry!"
      );
      /** Call function again */
      lengthInputPrompt();
    } else {
      /** Else, save input to saved variables */
      savedPasswordLength = passwordLengthInput;
    }
    return savedPasswordLength;
  }

  /** Call Length prompt function */
  lengthInputPrompt();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);