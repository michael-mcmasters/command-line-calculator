#!/usr/bin/env node
// The above is needed for script to be installed globally on pc and mac.

const input = process.argv.slice(2);

let result = parseNumber(input[0]);
for (let i = 1; i < input.length; i += 2) {
  let symbol = parseSymbol(input[i]);
  let num = parseNumber(input[i + 1]);
  result = calculate(result, symbol, num);
}
console.log(result);



function parseSymbol(str) {
  if (str === "+" || str === "-" || str === "*" || str === "/" || str === "%")
    return str;
  throw new error(`Expected a symbol (+, -, *, /, or %), but received ${str}`);
}

function parseNumber(str) {
  let num = Number(str);
  if (isNaN(num))
    throw new error(`Expected a number but received ${num}.`);
  return num;
}

function calculate(num1, symbol, num2) {
  switch (symbol) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      throw new exception("Something went wrong. Unable to calculate.");
  }
}






// const input = process.argv.slice(2);
// let result = input[0];
// let lookingForSymbol = true;
// let symbol = "";
// for (let i = 1; i < input.length; i++) {
//   if (lookingForSymbol) {
//     symbol = getSymbol(input[i]);
//   } else {

//   }

//   console.log(input[i]);


//   lookingForSymbol = !lookingForSymbol;
// }

// function getSymbol(str) {

// }





// const [num1, symbol, num2] = parseInput();
// const output = calculate(num1, symbol, num2);
// console.log(output);

// function parseInput() {
//   const input = process.argv.slice(2);
//   const num1 = Number(input[0]);
//   const symbol = input[1];
//   const num2 = Number(input[2]);
//   return [num1, symbol, num2];
// }

// function calculate(num1, symbol, num2) {
//   switch (symbol) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     case "%":
//       return num1 % num2;
//   }
