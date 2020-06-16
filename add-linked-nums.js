// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
  const vals1 = drillDownList(l1);
  const vals2 = drillDownList(l2);

  const maxlen = vals1.length > vals2.length ? vals1.length : vals2.length;

  const result = [];

  const defaultToZero = (item) => {
    return !!item ? item : 0;
  };

  let carryover = 0;
  for (let index = 0; index < maxlen; index++) {
    let sum =
      defaultToZero(vals1[index]) + defaultToZero(vals2[index]) + carryover;

    console.log({ carryover, sum });
    if (sum >= 10) {
      carryover = Math.floor((sum - (sum % 10)) / 10);
      sum = sum % 10;
    } else {
      carryover = 0;
    }
    result.push(sum);
  }
  console.log({ carryover });

  while (carryover > 0) {
    sum = carryover % 10;
    carryover = Math.floor((sum - (sum % 10)) / 10);
    result.push(sum);
  }

  return generateLinkedList(result);
};

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

function test() {
  const item1 = generateLinkedList([2, 4, 3]);
  const item2 = generateLinkedList([5, 6, 4]);

  console.log({ final: drillDownList(addTwoNumbers(item1, item2)) });

  const item3 = generateLinkedList([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ]);
  const item4 = generateLinkedList([5, 6, 4]);

  console.log({ final: drillDownList(addTwoNumbers(item3, item4)) });

  const item5 = generateLinkedList([9]);
  const item6 = generateLinkedList([9]);

  console.log({ final: drillDownList(addTwoNumbers(item5, item6)) });

  const item7 = generateLinkedList([9, 9, 9]);
  const item8 = generateLinkedList([9, 9, 9, 9, 9, 9, 9, 9, 9]);

  console.log({ final: drillDownList(addTwoNumbers(item7, item8)) });
}

test();
