const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

class Element {
  constructor(num, idx) {
    this.value = num;
    this.originIdx = idx;
  }
}

function solution(input) {
  const [t, ...inputs] = input.split("\n");
  const result = [];

  for (let i = 0; i < inputs.length; i += 2) {
    const [n, m] = inputs[i].split(" ").map(Number);
    const nums = inputs[i + 1].split(" ").map(Number);
    const queue = [];
    let cnt = 0;

    for (let j = 0; j < nums.length; j++) {
      queue.push(new Element(nums[j], j));
    }

    while (true) {
      const max = Math.max(...nums);

      while (queue[0].value < max) {
        queue.push(queue.shift());
      }

      if (queue[0].originIdx === m) {
        result.push(++cnt);
        break;
      } else {
        cnt++;
        nums.splice(nums.indexOf(max), 1);
        queue.shift();
      }
    }
  }

  return result.join("\n");
}

console.log(solution(input));
