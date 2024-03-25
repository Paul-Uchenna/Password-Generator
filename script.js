const passwordEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("len");
const uppercaseEl = document.getElementById("upper");
const lowercaseEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getRandomLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getRandomUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = lengthEl.value;

  let password = "";

  // This if statement ensures that we include at least one character type if its corresponding checkbox is checked,
  // and we start generating the password at the specified length.
  if (uppercaseEl.checked) {
    password += getRandomUppercase();
  }

  if (lowercaseEl.checked) {
    password += getRandomLowercase();
  }

  if (numberEl.checked) {
    password += getRandomNumber();
  }

  if (symbolEl.checked) {
    password += getRandomSymbol();
  }

  for (let i = password.length; i < length; i++) {
    const randomCharacter = generateRandomCharacter();
    password += randomCharacter;
  }

  passwordEl.innerText = password;
}

function generateRandomCharacter() {
  const characters = [];
  if (uppercaseEl.checked) {
    characters.push(getRandomUppercase());
  }

  if (lowercaseEl.checked) {
    characters.push(getRandomLowercase());
  }

  if (numberEl.checked) {
    characters.push(getRandomNumber());
  }

  if (symbolEl.checked) {
    characters.push(getRandomSymbol());
  }

  if (characters.length === 0) return "";

  return characters[Math.floor(Math.random() * characters.length)];
}

generateEl.addEventListener("click", generatePassword);

// Copier le mot de passe
copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
