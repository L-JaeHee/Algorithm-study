const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minHeap = {
  items: [null],
  size: 0,

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
  },

  insert(value, max) {
    this.size++;
    this.items.push(value);

    let currentIndex = this.size;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex >= 1) {
      if (this.items[parentIndex] > this.items[currentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = Math.floor(currentIndex / 2);
      } else {
        break;
      }
    }

    if (this.size > max) {
      this.remove();
    }
  },

  remove() {
    this.swap(1, this.size);
    const result = this.items.pop();
    this.size--;

    let currentIndex = 1;
    let leftIndex;
    let rightIndex;

    while (true) {
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;

      const current = this.items[currentIndex];
      const left = this.items[leftIndex] || Number.MAX_SAFE_INTEGER;
      const right = this.items[rightIndex] || Number.MAX_SAFE_INTEGER;

      if (current < left && current < right) {
        break;
      } else if (left < right) {
        this.swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else {
        this.swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      }
    }

    return result;
  },

  peek() {
    return this.items[1];
  },
};

let count = 0;
let n;

rl.on("line", (line) => {
  if (count === 0) {
    n = Number(line);
    count++;
  } else if (count <= n) {
    [...line.split(" ").map(Number)].forEach((num) => {
      minHeap.insert(num, n);
    });

    count++;
  } else if (count > n) {
    rl.close();
  }
}).on("close", () => {
  console.log(minHeap.peek());

  process.exit();
});
