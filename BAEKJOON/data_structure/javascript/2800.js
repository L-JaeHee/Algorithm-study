const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

// 조합
function combination(arr, num) {
  if (num === 1) return arr.map((element) => [element]);
  const result = [];

  arr.forEach((fixed, idx, originArr) => {
    const rest = originArr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attached = combinations.map((element) => [fixed, ...element]);

    result.push(...attached);
  });

  return result;
}

// 모든 index에 대해 문자를 지움
function removeString(str, ...indecies) {
  const result = str.split("");

  for (let idx of indecies) {
    result[idx] = "";
  }

  return result.join("");
}

function solution(input) {
  const parentheses = [];
  const stack = [];
  const combinations = [];
  const result = [];

  // 괄호 짝 찾기
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") stack.push(i);
    if (input[i] === ")") parentheses.push([stack.pop(), i]);
  }

  const numArr = new Array(parentheses.length).fill(0).map((_, idx) => idx);

  for (let i = 0; i < parentheses.length; i++) {
    // 1개 ~ 괄호 짝 개수 만큼 선택하는 조합 찾기
    combinations.push(...combination(numArr, i + 1));
  }

  // 각 조합에 해당하는 괄호 짝 인덱스를 모두 모은 후 removeString 사용
  for (let combination of combinations) {
    const indecies = [];

    for (let num of combination) {
      indecies.push(...parentheses[num]);
    }

    result.push(removeString(input, ...indecies));
  }

  return [...new Set(result)].sort().join("\n");
}

console.log(solution(input));
