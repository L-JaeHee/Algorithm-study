const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

// 브루트 포스 풀이
function solution(input) {
  const [a, b, c, d, e, f] = input.split(" ").map(Number);

  // 2000 * 2000
  for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
      if (x * a + y * b === c && x * d + y * e === f) {
        return `${x} ${y}`;
      }
    }
  }
}

console.log(solution(input));
