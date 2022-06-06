let totalLength = window.prompt("Password Length:");
let useNumbers = window.confirm("Use numbers?");
let useUppercase = window.confirm("Use uppercase letters?");
let useLowercase = window.confirm("Use lowercase letters?");
let useSymbols = window.confirm("Use symbols?");
let generateBtn = document.getElementById("generate");
let resultBtn = document.getElementById("result");
let symbols = '~`!@#$%^&*()_-+={[}]:;"<,>.?/|';

generateBtn.addEventListener("click", function () {
    let Length = totalLength;
    let Lowercase = useLowercase;
    let Uppercase = useUppercase;
    let Numbers = useNumbers;
    let Symbols = useSymbols;
    resultBtn.innerText = passwordGenerate(Lowercase, Uppercase, Numbers, Symbols, Length);
  });
  