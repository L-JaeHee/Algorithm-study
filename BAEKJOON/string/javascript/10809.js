const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const result = Array(26).fill(-1);

  for (let char of input) {
    result[char.charCodeAt() % 97] = input.indexOf(char);
  }

  return result.join(" ");
}

console.log(solution(input));
