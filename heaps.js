class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        this.swap(this.heap, current, Math.floor(current / 2));
        current = Math.floor(current / 2);
      }
    }
  }

  swap(arr, iA, iB) {
    [arr[iB], arr[iA]] = [arr[iA], arr[iB]];
    return arr;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  getMax() {
    return this.heap[1];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        this.swap(this.heap, current, Math.floor(current / 2));
        current = Math.floor(current / 2);
      }
    }
  }

  swap(arr, iA, iB) {
    [arr[iB], arr[iA]] = [arr[iA], arr[iB]];
    return arr;
  }
}

function heapify(arr) {
  let heap = new Heap();

  arr.forEach((item) => {
    heap.insert(item);
  });

  return heap;
}

function test() {
  const scramble = (arr) => {
    arr.sort((a, b) => {
      return Math.random() * 2 - Math.random() * 2;
    });
    return arr;
  };

  const genArray = (len) => {
    return new Array(len).fill(1).map((_, i) => i);
  };

  const testArray = scramble(genArray(100));
  const myHeap = heapify([...testArray]);

  console.log(testArray, myHeap.getMin(), myHeap.getMax());
}

test();

/* 

Heap indexes

             1
         /        \
        2          3
       / \       /   \
      4   5     6     7
     /\   /\    /\    /\
    8  9 10 11 12 13 14 15
          



*/
