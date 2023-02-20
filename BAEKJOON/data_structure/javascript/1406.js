const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

input = input.split("\n");
const initString = input.shift();
const n = +input.shift();
input = input.map((command) => command.split(" "));

function solution(input, init) {
  const leftStack = [...init.split("")];
  const rightStack = [];

  for (let command of input) {
    if (command[0] === "L" && leftStack.length !== 0) {
      rightStack.push(leftStack.pop());
    }

    if (command[0] === "D" && rightStack.length !== 0) {
      leftStack.push(rightStack.pop());
    }

    if (command[0] === "B") {
      leftStack.pop();
    }

    if (command[0] === "P") {
      leftStack.push(command[1]);
    }
  }

  return leftStack.concat(rightStack.reverse()).join("");
}

console.log(solution(input, initString));
