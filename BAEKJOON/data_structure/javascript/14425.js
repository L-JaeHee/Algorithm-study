const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [nm, ...strings] = input.split("\n");
  const [n, m] = nm.split(" ").map(Number);
  const stringSet = new Set(strings.slice(0, n));
  const restStrings = strings.slice(n);
  let result = 0;

  restStrings.forEach((str) => {
    if (stringSet.has(str)) result++;
  });

  return result;
}

console.log(solution(input));
