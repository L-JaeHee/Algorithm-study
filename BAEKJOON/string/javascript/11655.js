const fs = require("fs");
let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : fs.readFileSync(__dirname + "/input.txt").toString();

function solution(input) {
  const result = [];
  const small = "abcdefghijklmnopqrstuvwxyz".split("");
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  for (let char of input) {
    if (small.indexOf(char) !== -1) {
      result.push(small[((char.charCodeAt() + 13) % 97) % 26]);
    } else if (big.indexOf(char) !== -1) {
      result.push(big[((char.charCodeAt() + 13) % 65) % 26]);
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

console.log(solution(input));
