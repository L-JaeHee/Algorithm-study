const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const trees = new Map();

rl.on("line", (line) => {
  if (line) {
    if (trees.has(line)) {
      trees.set(line, trees.get(line) + 1);
    } else {
      trees.set(line, 1);
    }
  } else {
    rl.close();
  }
}).on("close", () => {
  const sum = [...trees.values()].reduce((acc, cur) => acc + cur);

  [...trees.keys()].sort().forEach((element) => {
    console.log(`${element} ${((trees.get(element) / sum) * 100).toFixed(4)}`);
  });
  process.exit();
});
