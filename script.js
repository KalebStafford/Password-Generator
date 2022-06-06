let symbols = '~`!@#$%^&*()_-+={[}]:;"<,>.?/|';

function randomLowercase() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
};
  
function randomUppercase() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
};
  
function randomNumbers() {
    return +String.fromCharCode(Math.floor(Math.random()*10)+48);
};
  
function randomSymbols() {
    return symbols[Math.floor(Math.random()*symbols.length)];
};

let randomGeneration = {
  lowercase: randomLowercase,
  uppercase: randomUppercase,
  numbers: randomNumbers,
  symbols: randomSymbols,
};

function passwordGenerate(lowercase, uppercase, numbers, symbols, length) {
  let generatedPassword = "";
  let TotalGenerated = lowercase + uppercase + numbers + symbols;
  let TotalArranged = [{ lowercase }, { uppercase }, { numbers }, { symbols }]
  .filter((data) => Object.values(data)[0]);
// In progress
}

let totalLength = window.prompt("Password Length:");
let useNumbers = window.confirm("Use numbers?");
let useUppercase = window.confirm("Use uppercase letters?");
let useLowercase = window.confirm("Use lowercase letters?");
let useSymbols = window.confirm("Use symbols?");
let generateBtn = document.getElementById("generate");
let resultBtn = document.getElementById("result");

generateBtn.addEventListener("click", function () {
  let Length = totalLength;
  let Lowercase = useLowercase;
  let Uppercase = useUppercase;
  let Numbers = useNumbers;
  let Symbols = useSymbols;
  resultBtn.innerText = passwordGenerate(Lowercase, Uppercase, Numbers, Symbols, Length);
});
