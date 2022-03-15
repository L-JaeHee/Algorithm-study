/*
  1991: 트리 순회/실버 1
*/
const fs = require('fs');
const localPath = __dirname + '/input.txt';  // 로컬 실행용 경로
const baekPath = '/dev/stdin';  // 백준 제출용 경로
let input = fs.readFileSync(localPath).toString().trim().split('\n');
input.shift();
input = input.map((x) => x.split(' '));

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function preOrder(node) {
  tree.result += node.data;
  if (node.left !== null) {
    preOrder(tree[node.left]);
  }
  if (node.right !== null) {
    preOrder(tree[node.right]);
  }
}

function inOrder(node) {
  if (node.left !== null) {
    inOrder(tree[node.left]);
  }
  tree.result += node.data;
  if (node.right !== null) {
    inOrder(tree[node.right]);
  }
}

function postOrder(node) {
  if (node.left !== null) {
    postOrder(tree[node.left])
  }
  if (node.right !== null) {
    postOrder(tree[node.right]);
  }
  tree.result += node.data;
}

const tree = {result: ""};

for (let command of input) {
  let [data, left, right] = command;
  if (left === '.') left = null;
  if (right === '.') right = null;
  tree[data] = new Node(data, left, right);
}

let ans = [];

tree.result = "";
preOrder(tree['A']);
ans.push(tree.result);

tree.result = "";
inOrder(tree['A']);
ans.push(tree.result);

tree.result = "";
postOrder(tree['A']);
ans.push(tree.result);

console.log(ans.join('\n'));
