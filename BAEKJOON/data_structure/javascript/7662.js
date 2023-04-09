const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim()
        .split("\n");

class Node {
  constructor(value, index) {
    this.value = value;
    this.index = index;
  }
}

class MinHeap {
  constructor() {
    this.items = [null];
    this.size = 0;
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
  }

  peek() {
    return this.items[1];
  }

  insert(node) {
    this.size++;
    this.items.push(node);

    let currentIndex = this.size;
    while (currentIndex > 1) {
      const parrentIndex = Math.floor(currentIndex / 2);
      const current = this.items[currentIndex].value;
      const parent = this.items[parrentIndex].value;

      if (current < parent) {
        this.swap(currentIndex, parrentIndex);
        currentIndex = parrentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      this.size--;
      return this.items.pop();
    } else {
      this.swap(1, this.size);
      this.size--;
      const result = this.items.pop();

      let currentIndex = 1;
      while (true) {
        const leftIndex = currentIndex * 2;
        const rightIndex = currentIndex * 2 + 1;
        const current = this.items[currentIndex].value;
        const left = this.items[leftIndex]?.value ?? Number.MAX_SAFE_INTEGER;
        const right = this.items[rightIndex]?.value ?? Number.MAX_SAFE_INTEGER;

        if (current < left && current < right) {
          break;
        } else if (left < right) {
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        } else if (right < left) {
          this.swap(currentIndex, rightIndex);
          currentIndex = rightIndex;
        }
      }

      return result;
    }
  }
}

const result = [];
let cursor = 0;
const t = +input[cursor++];

for (let i = 0; i < t; i++) {
  const k = +input[cursor++];

  const minHeap = new MinHeap();
  const maxHeap = new MinHeap();
  const checkList = [];
  let index = 0;

  for (let j = 0; j < k; j++) {
    const [order, num] = input[cursor++].split(" ").map((x) => (Number.isInteger(parseInt(x)) ? Number(x) : x));

    if (order === "I") {
      minHeap.insert(new Node(num, index));
      maxHeap.insert(new Node(num === 0 ? 0 : -num, index));
      checkList[index] = false;
      index++;
    } else if (num === 1) {
      while (checkList[maxHeap.peek()?.index] === true) {
        maxHeap.remove();
      }

      if (Number.isInteger(maxHeap.peek()?.index)) {
        checkList[maxHeap.remove().index] = true;
      }
    } else if (num === -1) {
      while (checkList[minHeap.peek()?.index] === true) {
        minHeap.remove();
      }

      if (Number.isInteger(minHeap.peek()?.index)) {
        checkList[minHeap.remove().index] = true;
      }
    }
  }

  while (checkList[maxHeap.peek()?.index] === true) {
    maxHeap.remove();
  }

  while (checkList[minHeap.peek()?.index] === true) {
    minHeap.remove();
  }

  if (minHeap.size === 0 && maxHeap.size === 0) {
    result.push("EMPTY");
  } else {
    result.push(maxHeap.peek().value === 0 ? 0 : -maxHeap.peek().value + " " + minHeap.peek().value);
  }
}


console.log(result.join("\n"));
