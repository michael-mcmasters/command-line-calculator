#!/usr/bin/env node

const input = process.argv.slice(2);
if (input.length % 2 === 0) {
  console.error(`Invalid arguments. Expected "2 + 4" or "5 + 2 * 3 / 8"`);
  process.exit(9);
}
// else if length is 1, split it using symbols.

console.log(input);
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
  console.error(`Expected a symbol (+, -, *, /, or %), but received: ${str}... Note for multiplication (*), you must escape the wildcard symbol as /*`);
  process.exit(9);
}

function parseNumber(str) {
  let num = Number(str);
  if (isNaN(num)) {
    console.error(`Expected a number but received: ${str}`);
    process.exit(9);
  }
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
      console.error("Something went wrong. Unable to calculate.");
      process.exit(9);
  }
}
