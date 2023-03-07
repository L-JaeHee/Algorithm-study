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
  const [M, N] = input.split(" ").map((x) => Number(x));
  const primes = Array(N + 1).fill(true);

  for (let i = 2; i < Math.floor(Math.sqrt(N)) + 1; i++) {
    let j = 2;
    while (i * j <= N) {
      primes[i * j] = false;
      j++;
    }
  }

  for (let i = M; i <= N; i++) {
    if (primes[i] && i > 1) result.push(i);
  }

  return result.join("\n");
}

console.log(solution(input));
