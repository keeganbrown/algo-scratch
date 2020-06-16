/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter((a) => a);
  let listCursor = 0;
  let outputListHead = pluckListHeadNode(lists, listCursor);
  listCursor++;

  let continueZipping = true;
  while (continueZipping) {
    listCursor = listCursor % lists.length;

    if (lists[listCursor]) {
      const targetListHead = pluckListHeadNode(lists, listCursor);
      outputListHead = insertListNode(outputListHead, targetListHead);
    }

    if (!lists.filter((a) => a).length) {
      continueZipping = false;
    }

    listCursor++;
  }

  return outputListHead;
};

function insertListNode(listHeadNode, nodeToInsert) {
  if (listHeadNode.val >= nodeToInsert.val) {
    nodeToInsert.next = listHeadNode;
    return nodeToInsert;
  }
  if (
    listHeadNode.val <= nodeToInsert.val &&
    listHeadNode.next &&
    listHeadNode.next.val >= nodeToInsert.val
  ) {
    nodeToInsert.next = listHeadNode.next;
    listHeadNode.next = nodeToInsert;
    return listHeadNode;
  }
  if (listHeadNode.val < nodeToInsert.val && !listHeadNode.next) {
    listHeadNode.next = nodeToInsert;
    return listHeadNode;
  }
  if (listHeadNode.val < nodeToInsert.val && listHeadNode.next) {
    insertListNode(listHeadNode.next, nodeToInsert);
  }
  return listHeadNode;
}

function pluckListHeadNode(lists, listCursor) {
  let listHeadNode = null;
  if (lists[listCursor]) {
    listHeadNode = lists[listCursor];
    lists[listCursor] = listHeadNode.next;
    listHeadNode.next = null;
  }
  return listHeadNode;
}

function findTail(listNode) {
  return listNode.next ? findTail(listNode.next) : listNode;
}

function smallestListNode() {}

// TEST
function drillDownList(listNode, collector = []) {
  collector.push(listNode.val);
  if (listNode.next) {
    return drillDownList(listNode.next, collector);
  }
  return collector;
}

function generateLinkedList(nodeValues = []) {
  const setupNodeValues = nodeValues.reverse();
  let last;
  setupNodeValues.forEach((val) => {
    if (last) {
      last = new ListNode(val, last);
      return;
    }
    last = new ListNode(val);
    return;
  });
  return last;
}

// TEST
const tracker = [];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  tracker.push(this);
}

function test1() {
  const listCollection = [
    generateLinkedList([1, 4, 5]),
    generateLinkedList([1, 3, 4]),
    generateLinkedList([2, 6])
  ];

  console.log({ final: drillDownList(mergeKLists(listCollection)) });
}

function test2() {
  const listCollection = [generateLinkedList([]), generateLinkedList([1])];

  console.log({ final: drillDownList(mergeKLists(listCollection)) });
}

test1();
test2();
