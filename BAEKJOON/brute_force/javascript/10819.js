const fs = require("fs");

let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function permutation(arr, number) {
  const result = [];
  if (number === 1) return arr.map((element) => [element]);

  arr.forEach((fixed, index, originArr) => {
    const rest = [...originArr.slice(0, index), ...originArr.slice(index + 1)];
    const permutations = permutation(rest, number - 1);
    const attached = permutations.map((element) => [fixed, ...element]);
    result.push(...attached);
  });

  return result;
}

function solution(input) {
  let [n, nums] = input.split("\n");
  nums = nums.split(" ").map(Number);
  let result = 0;
  const permutations = permutation(nums, Number(n));

  for (const permutation of permutations) {
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(permutation[i] - permutation[i + 1]);
    }

    result = Math.max(result, sum);
  }

  return result;
}

console.log(solution(input));
