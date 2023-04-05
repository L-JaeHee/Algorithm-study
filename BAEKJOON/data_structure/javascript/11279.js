const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function pushHeaq(heaq, value) {
  heaq.push(value);
  let currentIdx = heaq.length - 1;

  while (currentIdx > 1) {
    const parentIdx = Math.floor(currentIdx / 2);

    if (heaq[parentIdx] < heaq[currentIdx]) {
      const temp = heaq[parentIdx];
      heaq[parentIdx] = heaq[currentIdx];
      heaq[currentIdx] = temp;

      currentIdx = parentIdx;
    } else {
      break;
    }
  }
}

function popHeaq(heaq) {
  if (heaq.length === 1) {
    return 0;
  } else if (heaq.length === 2) {
    return heaq.pop();
  }

  const result = heaq[1];
  heaq[1] = heaq.pop();

  let idx = 1;
  while (idx < heaq.length) {
    const current = heaq[idx] || 0;
    const left = heaq[idx * 2] || 0;
    const right = heaq[idx * 2 + 1] || 0;

    if (current > left && current > right) {
      break;
    } else if (left > right) {
      heaq[idx] = left;
      heaq[idx * 2] = current;
      idx *= 2;
    } else {
      heaq[idx] = right;
      heaq[idx * 2 + 1] = current;
      idx = idx * 2 + 1;
    }
  }

  return result;
}

function solution(input) {
  const heaq = [null];
  const [n, ...nums] = input.split("\n").map(Number);
  const result = [];

  for (let num of nums) {
    if (num === 0) {
      result.push(popHeaq(heaq));
    } else {
      pushHeaq(heaq, num);
    }
  }

  return result.join("\n");
}

console.log(solution(input));
