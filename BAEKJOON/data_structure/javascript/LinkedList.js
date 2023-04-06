// 연결리스트 구현

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 모든 노드 출력
   * @returns
   */
  getAll() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result.join(" -> ");
  }

  /**
   * 노드 추가
   * @param {Number} value 노드 값
   * @param {Number} index 추가 할 인덱스 위치, 생략 시 head, size보다 같거나 클 시 tail
   * @returns 생성한 노드
   */
  insert(value, index = 0) {
    const node = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    } else if (index >= this.size) {
      this.tail.next = node;
      this.tail = node;
      return node;
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
      return node;
    }

    let currentNode = this.head;
    let prevNode;

    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    prevNode.next = node;
    node.next = currentNode;

    return node;
  }

  /**
   * 노드 삭제
   * @param {Number} index 삭제하고자 하는 인덱스, 생략 또는 size보다 클 시: tail 삭제
   * @returns 삭제된 노드
   */
  remove(index = this.size) {
    this.size--;
    index = index > this.size ? this.size : index;

    if (index === 0) {
      const head = this.head;
      this.head = this.head.next;

      return head;
    }

    let currentNode = this.head;
    let prevNode;

    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (this.tail === currentNode) {
      prevNode.next = null;
      this.tail = prevNode;
      return currentNode;
    } else {
      prevNode.next = currentNode.next;
      return currentNode;
    }
  }
}
