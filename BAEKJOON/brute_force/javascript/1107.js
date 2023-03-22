const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, m, btns] = input.split("\n");
  let result = Math.abs(n - 100);

  if (btns) {
    btns = btns.split(" ");
  } else {
    btns = [];
  }

  for (let i = 0; i <= 999900; i++) {
    let flag = true;
    const str = i.toString();

    for (let j = 0; j < str.length; j++) {
      if (btns.indexOf(str[j]) !== -1) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result = Math.min(result, Math.abs(n - i) + str.length);
    }
  }

  return result;
}

console.log(solution(input));
