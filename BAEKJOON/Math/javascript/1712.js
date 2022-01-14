/*
 1712: 손익분기점/브론즈 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().split(' ');

const total = +input[0];
const notebookCost = Number(input[2]) - Number(input[1]);

function checker(total, notebookCost) {
  if (notebookCost <= 0) return console.log(-1);
  return console.log(Math.floor((total / notebookCost)) + 1);
}

checker(total, notebookCost)
