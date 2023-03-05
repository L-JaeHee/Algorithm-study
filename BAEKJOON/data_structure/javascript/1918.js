const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const result = [];
  const symbolStack = [];
  const symbolScore = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  for (let char of input) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      result.push(char);
    } else if (char === ")") {
      while (symbolStack[symbolStack.length - 1] !== "(") {
        result.push(symbolStack.pop());
      }
      symbolStack.pop();
    } else if (symbolScore[char] <= symbolScore[symbolStack[symbolStack.length - 1]]) {
      while (symbolStack.length > 0 && symbolScore[symbolStack[symbolStack.length - 1]] >= symbolScore[char]) {
        result.push(symbolStack.pop());
      }

      symbolStack.push(char);
    } else {
      symbolStack.push(char);
    }
  }

  result.push(...symbolStack.reverse());
  return result.join("");
}

console.log(solution(input));
