const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

input = input.split("\n");
input.shift();
input = input.map((command) => command.split(" "));

class Queue {
  constructor() {
    this.current = [];
  }

  push(value) {
    this.current.push(value);
    return null;
  }

  pop() {
    if (this.current.length === 0) {
      return -1;
    }

    return this.current.shift();
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

  front() {
    if (this.current.length === 0) {
      return -1;
    }

    return this.current[0];
  }

  back() {
    if (this.current.length === 0) {
      return -1;
    }

    return this.current[this.current.length - 1];
  }
}

function solution(input) {
  const queue = new Queue();
  const result = [];

  for (let command of input) {
    const [order, value] = command;

    switch (order) {
      case "push":
        queue.push(value);
        break;

      case "pop":
        result.push(queue.pop());
        break;

      case "size":
        result.push(queue.size());
        break;

      case "empty":
        result.push(queue.empty());
        break;

      case "front":
        result.push(queue.front());
        break;

      case "back":
        result.push(queue.back());
        break;
    }
  }

  return result.join("\n");
}

console.log(solution(input));
