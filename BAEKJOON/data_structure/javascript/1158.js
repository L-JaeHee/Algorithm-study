const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

const [n, k] = input.split(" ").map((value) => Number(value));

// O(n^3) 풀이
// function solution(n, k) {
//   const init = [...Array(n).keys()].map((value) => ++value);
//   const result = [];

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < k; j++) {
//       init.push(init.shift());
//     }

//     result.push(init.pop());
//   }

//   return result.join(", ");
// }

// O(n^2) 풀이
function solution(n, k) {
  const arr = [...Array(n).keys()].map((value) => ++value);
  const result = [];
  let index = k - 1;

  while (arr.length > 0) {
    result.push(...arr.splice(index, 1));
    index = (index + k - 1) % arr.length;
  }

  return result.join(", ");
}

console.log(`<${solution(n, k)}>`);
