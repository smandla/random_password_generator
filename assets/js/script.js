// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

/**
 * variables to save user input
 */
let savedPasswordLength;
let savedIncludeLowercase;
let savedIncludeUppercase;
let savedIncludeNumbers;
let savedIncludeSpecialChars;

/**
 * character type variables
 */
var lowercase = "abcdefghijklmnopqrstuvwx";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//variable to include all chosen character types
let passwordStr = "";
let generatedPassword = "";

/**
 * Function to fully generate random password based on user input from prompts
 */
function generatePassword() {
  /**
   * First prompt once generateBtn is clicked
   * Function that saves user input for password length
   */
  function lengthInputPrompt() {
    // Prompt User to input password length while trimming whitespace
    let passwordLengthInput = prompt(
      "How many characters (8 - 128) would you like your password to contain?"
    ).trim();
    // convert to number
    passwordLengthInput = Math.floor(passwordLengthInput);
    // If input length is not a number, re-alert user
    if (isNaN(passwordLengthInput)) {
      alert("Please enter only number values!");
      lengthInputPrompt();
    }
    //if input is null, re-alert user
    else if (passwordLengthInput === null) {
      alert(
        "Can't generate password without choosing number of characters! Please retry!"
      );
      // Call function again
      lengthInputPrompt();
    }
    // Else if the input is < 8, re-alert user
    else if (passwordLengthInput < 8) {
      alert("Password must be atleast 8 characters!");

      // Call function again
      lengthInputPrompt();
    }
    // Else if the input is > 128, re-alert user
    else if (passwordLengthInput > 128) {
      alert("Password must be more than 128 characters!");
      // Call function again
      lengthInputPrompt();
    } else {
      // Else, save input to saved variables
      savedPasswordLength = passwordLengthInput;
    }
  }

  /** Second Prompt - Include Lowercase */
  function includeLowercasePrompt() {
    let lowercaseInput = confirm(
      "Click OK to confirm including lowercase characters. Click CANCEL to not include."
    );
    savedIncludeLowercase = lowercaseInput;
  }

  /** Third Prompt - Include Uppercase */
  function includeUppercasePrompt() {
    let uppercaseInput = confirm(
      "Click OK to confirm including uppercase characters. Click CANCEL to not include."
    );
    savedIncludeUppercase = uppercaseInput;
  }
  /** Fourth Prompt - Include Numbers */
  function includeNumbersPrompt() {
    let numbersInput = confirm(
      "Click OK to confirm including number characters. Click CANCEL to not include."
    );
    savedIncludeNumbers = numbersInput;
  }

  /** Fifth Prompt - Include Special Chars */
  function includeSpecialCharsPrompt() {
    let specialCharsInput = confirm(
      "Click OK to confirm including special characters. Click CANCEL to not include."
    );
    savedIncludeSpecialChars = specialCharsInput;
  }

  /** Function to call prompts and ensure atleast one character type is chosen */
  function promptsForUser() {
    /** Call Length prompt function */
    lengthInputPrompt();
    /** Call lowercase prompt function */
    includeLowercasePrompt();
    /** Call uppercase prompt function */
    includeUppercasePrompt();
    /** Call numbers prompt function */
    includeNumbersPrompt();
    /** Call special characters prompt function */
    includeSpecialCharsPrompt();

    /** If all prompts that involve including characters is false, re-alert user since atleast one needs to be true */
    if (
      savedIncludeLowercase === false &&
      savedIncludeUppercase === false &&
      savedIncludeNumbers === false &&
      savedIncludeSpecialChars === false
    ) {
      alert("Please choose atleast one character type!");
      includeLowercasePrompt();
      includeUppercasePrompt();
      includeNumbersPrompt();
      includeSpecialCharsPrompt();
    }
  }

  /** Call Prompts function */
  promptsForUser();

  /** Add chosen character types to the passwordStr */
  if (savedIncludeLowercase) {
    passwordStr += lowercase;
  }
  if (savedIncludeUppercase) {
    passwordStr += uppercase;
  }
  if (savedIncludeNumbers) {
    passwordStr += numbers;
  }
  if (savedIncludeSpecialChars) {
    passwordStr += specialChars;
  }

  /**
   * Loop to generate password based on inputted length
   * by taking random characters from passwordStr
   */
  for (let i = 0; i <= savedPasswordLength; i++) {
    //variable to get random index based off passwordStr length
    let randomIndex = Math.floor(Math.random() * passwordStr.length);
    //pick char based off randomIndex and append to generatedPassword
    generatedPassword += passwordStr[randomIndex];
  }

  //return generatedPassword result
  return generatedPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
