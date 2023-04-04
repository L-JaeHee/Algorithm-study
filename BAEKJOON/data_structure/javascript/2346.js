const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  let [n, nums] = input.split("\n");
  nums = nums.split(" ").map(Number);
  const originIndices = new Array(Number(n)).fill(0).map((_, idx) => idx + 1);
  const result = [];
  let idx = 0;

  while (nums.length > 0) {
    const currentNum = nums.splice(idx, 1)[0];
    const currentIdx = originIndices.splice(idx, 1)[0];
    result.push(currentIdx);

    if (currentNum > 0) {
      idx += currentNum - 1;
    } else {
      idx += currentNum;
    }

    if (idx >= nums.length) {
      idx %= nums.length;
    } else if (idx < 0) {
      idx += nums.length;
    }
  }

  return result.join(" ");
}

console.log(solution(input));
