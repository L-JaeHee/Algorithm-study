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

function checker(ps) {
  const stack = [];

  for (let p of ps) {
    if (p === "(") {
      stack.push(p);
    } else if (stack.length === 0) {
      return "NO";
    } else {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

const result = [];
for (let ps of input) {
  result.push(checker(ps));
}

console.log(result.join("\n"));
