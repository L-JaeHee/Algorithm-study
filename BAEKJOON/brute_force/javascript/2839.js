const fs = require("fs");

let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let result = -1;
  input = Number(input);

  for (let i = 0; i * 5 <= input; i++) {
    if ((input - i * 5) % 3 === 0) {
      result = i + (input - i * 5) / 3;
    }
  }

  return result;
}

console.log(solution(input));
