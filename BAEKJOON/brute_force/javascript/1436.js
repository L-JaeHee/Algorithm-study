const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let n = 1;
  let i = 666;

  while (n < Number(input)) {
    i++;

    if (i.toString().match(/666/)) {
      n++;
    }
  }

  return i;
}

console.log(solution(input));
