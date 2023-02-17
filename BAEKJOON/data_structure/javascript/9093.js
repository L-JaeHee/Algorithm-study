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

console.log(
  input
    .map((strings) => {
      return strings
        .split(" ")
        .map((words) => {
          return words.split("").reverse().join("");
        })
        .join(" ");
    })
    .join("\n")
);

// const result = [];

// for (let string of input) {
//   const words = string.split(" ");
//   const reversedWords = words.map((word) => {
//     return word.split("").reverse().join("");
//   });

//   result.push(reversedWords.join(" "));
// }

// console.log(result.join("\n"));
