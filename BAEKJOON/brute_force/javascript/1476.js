const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [E, S, M] = input.split(" ").map(Number);
  let result = 0;
  let e = 0;
  let s = 0;
  let m = 0;

  while (e !== E || s !== S || m !== M) {
    result++;
    e = e + 1 > 15 ? 1 : e + 1;
    s = s + 1 > 28 ? 1 : s + 1;
    m = m + 1 > 19 ? 1 : m + 1;
  }

  return result;
}

console.log(solution(input));
