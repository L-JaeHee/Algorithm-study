const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function solution(input) {
  const [n, ...cases] = input.split("\n").map((x) => x.split(" ").map((x) => Number(x)));
  cases.map((x) => {
    x.shift();
  });
  const result = [];

  for (let nums of cases) {
    let sum = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let a = nums[i] > nums[j] ? nums[i] : nums[j];
        let b = nums[i] > nums[j] ? nums[j] : nums[i];
        let temp;
        while (a % b !== 0) {
          temp = a % b;
          a = b;
          b = temp;
        }
        sum += b;
      }
    }

    result.push(sum);
  }

  return result.join("\n");
}

console.log(solution(input));
