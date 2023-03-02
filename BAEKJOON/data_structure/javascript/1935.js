const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, exp, ...nums] = input.split("\n");
  n = Number(n);
  nums = nums.map((x) => Number(x));
  const stack = [];
  const obj = {};

  let alpha = 65;
  for (let i = 0; i < n; i++) {
    obj[String.fromCharCode(alpha)] = nums[i];
    alpha++;
  }

  const command = {
    "*": (x, y) => x * y,
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "/": (x, y) => x / y,
  };

  for (let char of exp) {
    if (["*", "+", "-", "/"].indexOf(char) !== -1) {
      let second = stack.pop();
      let first = stack.pop();
      stack.push(command[char](first, second));
    } else {
      stack.push(obj[char]);
    }
  }

  return stack[0];
}

console.log(solution(input).toFixed(2));
