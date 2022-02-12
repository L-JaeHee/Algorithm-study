/*
  10866: 덱/실버 4
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.shift();

const commands = {
  push_back: function(deque, x) {
    deque.push(x);
  },
  push_front: function(deque, x) {
    deque.unshift(x);
  },
  pop_front: function(deque) {
    if (deque.length === 0) {
      return -1
    } else {
      return deque.shift();
    }
  },
  pop_back: function(deque) {
    if (deque.length === 0) {
      return -1
    } else {
      return deque.splice(deque.length - 1, 1)[0];
    }
  },
  size: function(deque) {
    return deque.length;
  },
  empty: function(deque) {
    if (deque.length === 0) {
      return 1;
    } else {
      return 0;
    }
  },
  front: function(deque) {
    if (deque.length === 0) {
      return -1;
    } else {
      return deque[0];
    }
  },
  back: function(deque) {
    if (deque.length === 0) {
      return -1;
    } else {
      return deque[deque.length - 1];
    }
  }
}

const deque = [];
const result = [];

for (let value of input) {
  let command = value.split(' ');
  if (command[0] === 'push_back') commands.push_back(deque, command[1]);
  else if (command[0] === 'push_front') commands.push_front(deque, command[1]);
  else if (command[0] === 'pop_front') result.push(commands.pop_front(deque));
  else if (command[0] === 'pop_back') result.push(commands.pop_back(deque));
  else if (command[0] === 'size') result.push(commands.size(deque));
  else if (command[0] === 'empty') result.push(commands.empty(deque));
  else if (command[0] === 'front') result.push(commands.front(deque));
  else if (command[0] === 'back') result.push(commands.back(deque));
}

console.log(result.join('\n'));