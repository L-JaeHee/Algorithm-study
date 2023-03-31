const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim();

class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class NodeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(num) {
    this.length++;
    const newNode = new Node(num);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  getHead() {
    return this.head;
  }

  removeHead() {
    const node = this.head;

    this.length--;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    }

    return node;
  }

  getLength() {
    return this.length;
  }
}

function solution(input) {
  const nodeList = new NodeList();

  for (let i = 1; i <= input; i++) {
    nodeList.push(i);
  }

  while (nodeList.getLength() > 2) {
    nodeList.removeHead();
    nodeList.push(nodeList.removeHead().value);
    nodeList.removeHead();
    nodeList.push(nodeList.removeHead().value);
  }

  return nodeList.tail.value;
}

console.log(solution(input));
