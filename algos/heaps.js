class MinHeap {
  constructor() {
    this.heap = [null];
  }

  root() {
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

  root() {
    return this.heap[1];
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] < this.heap[current]
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
  let minHeap = new MinHeap();
  let maxHeap = new MaxHeap();

  arr.forEach((item) => {
    minHeap.insert(item);
  });

  arr.forEach((item) => {
    maxHeap.insert(item);
  });

  return { minHeap, maxHeap };
}

function test() {
  const scramble = (arr) => {
    const cloneArr = [...arr];
    cloneArr.sort((a, b) => {
      return Math.random() * 2 - Math.random() * 2;
    });
    return cloneArr;
  };

  const genArray = (len, shift = 0) => {
    return new Array(len).fill(1).map((_, i) => i + shift);
  };

  const orderedArray = genArray(1000, 23);
  const testArray = scramble(orderedArray);
  const { minHeap, maxHeap } = heapify([...testArray]);

  console.log(
    orderedArray[0] === minHeap.root(),
    'First of ordered array should equal root of min heap'
  );
  console.log(
    orderedArray[orderedArray.length - 1] === maxHeap.root(),
    'Last of ordered array should equal root of min heap'
  );

  console.log({ min: minHeap.root(), max: maxHeap.root() });
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
