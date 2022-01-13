/*
 1316: 그룹 단어 체커/실버 5
*/
const { notDeepEqual } = require('assert');
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split('\n');


let result = 0;
for (let i = 1; i <= +input[0]; i++) {
  result += GroupWordChecker(input[i]);
}
console.log(result);

function GroupWordChecker(words) {
  const dict = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (dict[word] === undefined) dict[word] = i;
    else {
      if (i - dict[word] === 1) dict[word] = i;
      else return 0
    }
  }
  return 1
}
