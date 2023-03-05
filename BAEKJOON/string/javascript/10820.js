const fs = require("fs");
let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : fs.readFileSync(__dirname + "/input.txt").toString();

function solution(input) {
  input = input.split("\n");
  input.pop();
  const result = [];

  for (let str of input) {
    const nums = [0, 0, 0, 0];
    nums[0] = str.match(/[a-z]/g)?.length ?? 0;
    nums[1] = str.match(/[A-Z]/g)?.length ?? 0;
    nums[2] = str.match(/[0-9]/g)?.length ?? 0;
    nums[3] = str.match(/ /g)?.length ?? 0;

    result.push(nums.join(" "));
  }

  return result.join("\n");
}

console.log(solution(input));
