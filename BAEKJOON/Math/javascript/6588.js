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
  const max = 1000000;
  const primes = Array(max + 1).fill(true);
  const nums = input.split("\n").map((x) => Number(x));
  nums.pop();

  for (let i = 2; i < Math.floor(Math.sqrt(max)) + 1; i++) {
    let j = 2;
    while (i * j <= max) {
      primes[i * j] = false;
      j++;
    }
  }

  for (let num of nums) {
    let flag = true;
    for (let i = 2; i < num / 2 + 1; i++) {
      if (primes[i] && primes[num - i]) {
        result.push(`${num} = ${i} + ${num - i}`);
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(`Goldbach\'s conjecture is wrong`);
    }
  }

  return result.join("\n");
}

console.log(solution(input));
