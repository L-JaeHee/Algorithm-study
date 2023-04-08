const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const heap = {
  items: [null],
  size: 0,

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
  },

  insert(value) {
    this.size++;
    this.items.push(value);
    let currentIndex = this.size;

    while (currentIndex > 1) {
      const parentIndex = Math.floor(currentIndex / 2);

      if (this.compare(currentIndex, parentIndex)) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  },

  compare(index1, index2) {
    const value1 = this.items[index1] || Number.MAX_SAFE_INTEGER;
    const value2 = this.items[index2] || Number.MAX_SAFE_INTEGER;

    if (Math.abs(value1) < Math.abs(value2)) {
      return true;
    } else if (Math.abs(value1) === Math.abs(value2) && value1 < 0) {
      return true;
    } else {
      return false;
    }
  },

  remove() {
    if (this.size === 0) {
      return 0;
    } else if (this.size === 1) {
      this.size--;
      return this.items.pop();
    } else {
      this.swap(1, this.size);
      const result = this.items.pop();
      this.size--;

      let currentIndex = 1;
      while (true) {
        const leftIndex = currentIndex * 2;
        const rightIndex = currentIndex * 2 + 1;

        if (this.compare(currentIndex, leftIndex) && this.compare(currentIndex, rightIndex)) {
          break;
        } else if (this.compare(leftIndex, rightIndex)) {
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        } else if (this.compare(rightIndex, leftIndex)) {
          this.swap(currentIndex, rightIndex);
          currentIndex = rightIndex;
        } else if (this.compare(leftIndex, currentIndex)) {
          this.swap(currentIndex, leftIndex);
          currentIndex = leftIndex;
        } else {
          break;
        }
      }

      return result;
    }
  },
};

let count = 0;
let n;
const result = [];

rl.on("line", (line) => {
  line = Number(line);

  if (count === 0) {
    n = line;
    count++;
  } else if (count <= n) {
    if (line === 0) {
      result.push(heap.remove());
    } else {
      heap.insert(line);
    }
    count++;
  } else if (count > n) {
    rl.close();
  }
}).on("close", () => {
  console.log(result.join("\n"));
  process.exit();
});
