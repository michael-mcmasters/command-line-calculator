#!/usr/bin/env node

const input = getInput();

let result = parseNumber(input[0]);
for (let i = 1; i < input.length; i += 2) {
  let symbol = parseSymbol(input[i]);
  let num = parseNumber(input[i + 1]);
  result = calculate(result, symbol, num);
}
console.log(result);



function getInput() {
  let input = process.argv.slice(2);
  if (input.length === 1) {
    // If user didn't put spaces between args: (1+3*2/9)
    let n = input[0].match(/[0-9]+|\+|\-|\*|\/|\%/g);
    input = n;
  } else if (input.length % 2 === 0) {
    // If there are an even amount of arguments, there is probably a symbol after a number. Can't calculate this: (1 + 2 + ).
    console.error(`Invalid arguments. The expected format is:  "2 + 4 - 1 \* 3" or "2+4-1*3"`);
    process.exit(9);
  }
  return input;
}

function parseSymbol(str) {
  if (str === "+" || str === "-" || str === "*" || str === "/" || str === "%")
    return str;
  console.error(`Expected a symbol (+, -, *, /, or %), but received: ${str}.
  Note for multiplication (*), you must escape the wildcard symbol as /*`);
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