const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

function isPalindrome(string, left, right, cnt) {
  if (left >= right) return [1, cnt];
  else if (string[left] !== string[right]) return [0, cnt];
  else return isPalindrome(string, left + 1, right - 1, cnt + 1);
}

function solution(input) {
  const result = [];
  const [n, ...strings] = input.split("\n");

  for (string of strings) {
    result.push(isPalindrome(string, 0, string.length - 1, 1));
  }

  return result.map((element) => element.join(" ")).join("\n");
}

console.log(solution(input));
