#!/usr/bin/env node

const args = getInput();
const result = calculateResult(args);
console.log(result);


// Get args user passed from the CLI.
function getInput() {
  let argsArr = process.argv.slice(2);
  if (argsArr.length === 1) {
    // If user didn't put spaces between args: (1+3*2/9).
    argsArr = argsArr[0].match(/[0-9]+|\+|\-|\*|\/|\%/g);
  } else if (argsArr.length % 2 === 0) {
    // Must be an odd amount of arguments. Can't calculate 4 args such as (1 + 2 + ).
    console.error(`Invalid arguments. The expected format is:  "2 + 4 - 1 \* 3" or "2+4-1*3"`);
    process.exit(9);
  }
  return argsArr;
}

// Loop every other index starting at index 1. Get symbol and number after it.
// 1 (+ 2) (- 3) (* 4) (/ 5).
function calculateResult(args) {
  let result = parseNumber(args[0]);
  for (let i = 1; i < args.length; i += 2) {
    const symbol = parseSymbol(args[i]);
    const num = parseNumber(args[i + 1]);
    result = calculate(result, symbol, num);
  }
  return result;
}

function parseSymbol(str) {
  if (str === "+" || str === "-" || str === "*" || str === "/" || str === "%")
    return str;

  console.error(`Expected a symbol (+, -, *, /, or %), but received: ${str}.
  Note for multiplication (*), you must escape the wildcard symbol as /*`);
  process.exit(9);
}

function parseNumber(str) {
  const num = Number(str);
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