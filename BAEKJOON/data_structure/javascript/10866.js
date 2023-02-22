const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

input = input.split("\n");
const n = +input.shift();
input = input.map((command) => command.split(" "));

class Deque {
  constructor() {
    this.current = [];
  }

  pushFront(value) {
    this.current.unshift(value);
  }

  pushBack(value) {
    this.current.push(value);
  }

  popFront() {
    if (this.current.length === 0) {
      return -1;
    }

    return this.current.shift();
  }

  popBack() {
    if (this.current.length === 0) {
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
  const result = [];
  const deque = new Deque();

  for (let command of input) {
    const [order, value] = command;

    switch (order) {
      case "push_front":
        deque.pushFront(value);
        break;

      case "push_back":
        deque.pushBack(value);
        break;

      case "pop_front":
        result.push(deque.popFront());
        break;

      case "pop_back":
        result.push(deque.popBack());
        break;

      case "size":
        result.push(deque.size());
        break;

      case "empty":
        result.push(deque.empty());
        break;

      case "front":
        result.push(deque.front());
        break;

      case "back":
        result.push(deque.back());
        break;
    }
  }

  return result.join("\n");
}

console.log(solution(input));
