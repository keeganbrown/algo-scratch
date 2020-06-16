// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/

function swapPairs(head) {
  const newHeadNode = head ? head.next : undefined;
  let nextHead =
    head && head.next && head.next.next ? head.next.next : undefined;

  if (newHeadNode) {
    newHeadNode.next = head;
  }

  if (nextHead) {
    nextHead = swapPairs(nextHead);
  }

  if (head) {
    head.next = nextHead;
  }

  return newHeadNode || head;
}

// TEST

const tracker = [];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  tracker.push(this);
}

function generateLinkedList(originalNodes = []) {
  const setupNodes = originalNodes.reverse();
  let last;
  setupNodes.forEach((val) => {
    if (last) {
      last = new ListNode(val, last);
      return;
    }
    last = new ListNode(val);
    return;
  });
  return last;
}

const test1head = generateLinkedList([1, 2, 3, 4]);

function echoChain(HeadListNode, loggerArray = []) {
  loggerArray.push(HeadListNode.val);
  if (HeadListNode.next) {
    return echoChain(HeadListNode.next, loggerArray);
  }
  console.log(loggerArray);
}

console.log(echoChain(test1head));

const newTest1head = swapPairs(test1head);

console.log(echoChain(newTest1head));
console.log(tracker);

const test2head = generateLinkedList([1, 2, 3]);
const newTest2head = swapPairs(test2head);
console.log(echoChain(newTest2head));
