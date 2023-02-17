const fs = require("fs");
const localPath = __dirname + "/input.txt"; // 로컬 실행용 경로
const baekPath = "/dev/stdin"; // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split("\n");
input.shift();
input = input.map((value) => value.split(" "));
const result = [];

class Stack {
  constructor() {
    this.current = [];
  }

  push(value) {
    return this.current.push(value);
  }

  pop() {
    if (this.empty() === 1) {
      return -1;
    }

    return this.current.pop();
  }

  size() {
    return this.current.length;
  }

  empty() {
    if (this.current.length === 0) {
      return 1;
    }

    return 0;
  }

  top() {
    const currentLength = this.current.length;

    if (currentLength === 0) {
      return -1;
    }

    return this.current[currentLength - 1];
  }
}

const testStack = new Stack();

for (let command of input) {
  switch (command[0]) {
    case "push":
      testStack.push(command[1]);
      break;

    case "pop":
      result.push(testStack.pop());
      break;

    case "size":
      result.push(testStack.size());
      break;

    case "empty":
      result.push(testStack.empty());
      break;

    case "top":
      result.push(testStack.top());
      break;
  }
}

console.log(result.join("\n"));
