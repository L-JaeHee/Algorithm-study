const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

// 정규식 풀이
// function solution(input) {
//   const re = /(<.+?>|\s)/;
//   let result = "";

//   for (let word of input.split(re)) {
//     if (re.test(word)) {
//       result += word;
//     } else {
//       result += word.split("").reverse().join("");
//     }
//   }

//   return result;
// }

// 일반 풀이
function solution(input) {
  const result = [];
  const stack = [];
  let toReverse = true;

  for (let char of input) {
    if (char === " " && toReverse) {
      result.push(stack.reverse().join(""));
      stack.length = 0;
      result.push(char);
      continue;
    } else if (char === "<") {
      result.push(stack.reverse().join(""));
      stack.length = 0;
      toReverse = false;
    } else if (char === ">") {
      stack.push(char);
      result.push(stack.join(""));
      stack.length = 0;
      toReverse = true;
      continue;
    }

    stack.push(char);
  }

  result.push(stack.reverse().join(""));

  return result.join("");
}

console.log(solution(input));
