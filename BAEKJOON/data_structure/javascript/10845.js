/*
  10845: 큐/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.shift();

const commands = {
  push: function(que, x) {
    que.push(x);
  },
  pop: function(que) {
    if (que.length === 0) {
      return -1;
    } else {
      return que.shift();
    }
  },
  size: function(que) {
    return que.length;
  },
  empty: function(que) {
    if (que.length === 0) {
      return 1;
    } else {
      return 0;
    }
  },
  front: function(que) {
    if (que.length === 0) {
      return -1;
    } else {
      return que[0];
    }
  },
  back: function(que) {
    if (que.length === 0) {
      return -1;
    } else {
      return que[que.length - 1];
    }
  }
}

const que = [];
const result = [];

for (const value of input) {
  const command = value.split(' ');
  if (command[0] === 'push') commands.push(que, command[1]);
  else if (command[0] === 'pop') result.push(commands.pop(que));
  else if (command[0] === 'size') result.push(commands.size(que));
  else if (command[0] === 'empty') result.push(commands.empty(que));
  else if (command[0] === 'front') result.push(commands.front(que));
  else if (command[0] === 'back') result.push(commands.back(que));
}

console.log(result.join('\n'));