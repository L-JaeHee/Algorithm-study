const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
코드 가독성 개선
compareFunction을 이용해 하나의 Heap 클래스로 최소힙, 최대힙 구현
요소를 각각 노드 클래스를 만들어 객체로 삽입했던 부분을 정수로 사용하도록 개선

아직 메모리초과 문제 존재 -> 해결
해결 방법: 동기화를 위해 각각의 경우에 사용한 minCheckHeap, maxCheckHeap을 checkMap으로 하나로 줄이고
maxHeap에서 삭제시 +1, minHeap에서 삭제시 -1
로직을 도입하여 최소한의 메모리를 사용할 수 있도록 개선 
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
  const checkMap = new Map();

  for (let j = 0; j < k; j++) {
    let [order, n] = input[cursor++].split(" ");
    const num = Number(n);

    if (order === "I") {
      minHeap.insert(num);
      maxHeap.insert(num);

      if (!checkMap.has(num)) {
        checkMap.set(num, 0);
      }
    } else if (num === 1) {
      while (checkMap.get(maxHeap.top()) < 0) {
        const removedNum = maxHeap.pop();
        checkMap.set(removedNum, checkMap.get(removedNum) + 1);
      }

      const numToRemove = maxHeap.pop();
      if (numToRemove) {
        checkMap.set(numToRemove, checkMap.get(numToRemove) + 1);
      }
    } else if (num === -1) {
      while (checkMap.get(minHeap.top()) > 0) {
        const removedNum = minHeap.pop();
        checkMap.set(removedNum, checkMap.get(removedNum) - 1);
      }

      const numToRemove = minHeap.pop();
      if (numToRemove) {
        checkMap.set(numToRemove, checkMap.get(numToRemove) - 1);
      }
    }
  }

  while (checkMap.get(maxHeap.top()) < 0) {
    const removedNum = maxHeap.pop();
    checkMap.set(removedNum, checkMap.get(removedNum) + 1);
  }

  while (checkMap.get(minHeap.top()) > 0) {
    const removedNum = minHeap.pop();
    checkMap.set(removedNum, checkMap.get(removedNum) - 1);
  }

  if (minHeap.size() === 0 && maxHeap.size() === 0) {
    result.push("EMPTY");
  } else {
    result.push(`${maxHeap.top()} ${minHeap.top()}`);
  }
}

console.log(result.join("\n"));
