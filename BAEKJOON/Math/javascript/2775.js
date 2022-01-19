/*
  2775: 부녀회장이 될테야/브론즈 2
*/
const fs = require('fs');
const internal = require('stream');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split("\n");
input = input.map((x) => +x).slice(1,);

for (let user = 0; user < input.length; user += 2) {
  const k = input[user];
  const n = input[user + 1];
  const floors = [[...new Array(n)].map((_, i) => i + 1)];

  for (let i = 0; i < k - 1; i++) {
    const currFloor = [];
    
    for (let j = 1; j < n + 1; j++) {
      currFloor.push(floors[i].slice(0, j).reduce((sum, curr) => sum + curr));
    }
    
    floors.push(currFloor);
  }

  console.log(floors[k - 1].reduce((sum, curr) => sum + curr));
}