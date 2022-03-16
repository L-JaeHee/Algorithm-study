/*
  9184: 신나는 함수 실행/실버 2
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.pop();
input = input.map((x) => x.split(' ').map((y) => Number(y) + 50));


function w(a, b, c) {
  if (dp[a][b][c]) return dp[a][b][c];
  if (a <= 50 || b <= 50 || c <= 50) {
    dp[a][b][c] = 1;
    return dp[a][b][c];
  }
  if (a > 70 || b > 70 || c > 70) {
    dp[a][b][c] = w(70, 70, 70);
    return dp[a][b][c];
  }
  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dp[a][b][c];
  }
  
  dp[a][b][c] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
  return dp[a][b][c];
}

let dp = new Array(101);
for (let i = 0; i <= 100; i++) {
  dp[i] = new Array(101);
  for (let j = 0; j <= 100; j++) {
    dp[i][j] = new Array(101);
  }
}
let result = [];

for (let n of input) {
  let [a, b, c] = n;
  result.push(`w(${a - 50}, ${b - 50}, ${c - 50}) = ${w(a, b, c)}`);
}

console.log(result.join('\n'));