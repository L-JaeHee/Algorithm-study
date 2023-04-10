const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
코드 가독성 개선
compareFunction을 이용해 하나의 Heap 클래스로 최소힙, 최대힙 구현
요소를 각각 노드 클래스를 만들어 객체로 삽입했던 부분을 정수로 사용하도록 개선

아직 메모리초과 문제 존재
*/

class Heap {
  constructor(compareFunction) {
    this.items = [null];
    this.compareFunction = compareFunction;
  }

  size() {
    return this.items.length - 1;
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
  }

  top() {
    return this.items[1];
  }

  insert(num) {
    this.items.push(num);

    let currentIndex = this.size();
    while (currentIndex > 1) {
      const parrentIndex = Math.floor(currentIndex / 2);
      const current = this.items[currentIndex];
      const parent = this.items[parrentIndex];

      if (this.compareFunction(current, parent)) {
        this.swap(currentIndex, parrentIndex);
        currentIndex = parrentIndex;
      } else {
        break;
      }
    }
  }

  pop() {
    const size = this.size();
    if (size === 1) {
      return this.items.pop();
    } else if (size > 1) {
      this.swap(1, size);
      const result = this.items.pop();

      let currentIndex = 1;
      while (currentIndex <= Math.floor((size - 1) / 2)) {
        const [leftIndex, rightIndex] = [currentIndex * 2, currentIndex * 2 + 1];
        const [left, right, current] = [this.items[leftIndex], this.items[rightIndex], this.items[currentIndex]];
        const targetChild = this.compareFunction(right, left) ? rightIndex : leftIndex;

        if (this.compareFunction(current, this.items[targetChild])) {
          break;
        } else {
          this.swap(currentIndex, targetChild);
          currentIndex = targetChild;
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
  const minHeap = new Heap((a, b) => a < b);
  const maxHeap = new Heap((a, b) => a > b);
  const minCheckMap = new Map();
  const maxCheckMap = new Map();

  for (let j = 0; j < k; j++) {
    let [order, n] = input[cursor++].split(" ");
    const num = Number(n);

    if (order === "I") {
      minHeap.insert(num);
      maxHeap.insert(num);

      if (!minCheckMap.has(num)) {
        minCheckMap.set(num, 0);
        maxCheckMap.set(num, 0);
      }
    } else if (num === 1) {
      while (maxCheckMap.get(maxHeap.top()) > 0) {
        const removedNum = maxHeap.pop();
        maxCheckMap.set(removedNum, maxCheckMap.get(removedNum) - 1);
      }

      const removedNum = maxHeap.pop();
      if (removedNum) {
        minCheckMap.set(removedNum, minCheckMap.get(removedNum) + 1);
      }
    } else if (num === -1) {
      while (minCheckMap.get(minHeap.top()) > 0) {
        const removedNum = minHeap.pop();
        minCheckMap.set(removedNum, minCheckMap.get(removedNum) - 1);
      }

      const removedNum = minHeap.pop();
      if (removedNum) {
        maxCheckMap.set(removedNum, maxCheckMap.get(removedNum) + 1);
      }
    }
  }

  while (maxCheckMap.get(maxHeap.top()) > 0) {
    const removedNum = maxHeap.pop();
    maxCheckMap.set(removedNum, maxCheckMap.get(removedNum) - 1);
  }

  while (minCheckMap.get(minHeap.top()) > 0) {
    const removedNum = minHeap.pop();
    minCheckMap.set(removedNum, minCheckMap.get(removedNum) - 1);
  }

  if (minHeap.size() === 0 && maxHeap.size() === 0) {
    result.push("EMPTY");
  } else {
    result.push(`${maxHeap.top()} ${minHeap.top()}`);
  }
}

console.log(result.join("\n"));
