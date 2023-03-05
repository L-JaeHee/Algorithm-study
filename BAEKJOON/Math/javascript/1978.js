const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [n, nums] = input.split("\n");
  let result = 0;

  for (let num of nums.split(" ").map((x) => Number(x))) {
    if (num === 1) continue;
    let isPrime = true;

    for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) result++;
  }

  return result;
}

console.log(solution(input));
