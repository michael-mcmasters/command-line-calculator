#!/usr/bin/env node
// The above is needed for script to be installed globally on pc and mac.

const input = process.argv.slice(2);

const num1 = Number(input[0]);
const symbol = input[1];
const num2 = Number(input[2]);

const output = calculate(num1, symbol, num2);
console.log(output);

function getInput() {

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
  }
}