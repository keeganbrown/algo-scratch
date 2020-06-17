function pairUpClassmates(studentsAndCourses) {
  const pairs = {};
  const handleStudentPairs = (studentA, studentB) => {
    const sortedIDs = [studentA[0], studentB[0]].sort().join(',');
    if (!pairs[sortedIDs]) {
      pairs[sortedIDs] = [];

      const classList = Array.from(new Set(studentA[1].concat(studentB[1])));
      classList.forEach((className) => {
        if (
          studentA[1].includes(className) &&
          studentB[1].includes(className)
        ) {
          pairs[sortedIDs].push(className);
        }
      });
    }
  };

  studentsAndCourses.forEach((studentA) => {
    studentsAndCourses.forEach((studentB) => {
      if (studentA[0] !== studentB[0]) {
        handleStudentPairs(studentA, studentB);
      }
    });
  });

  return pairs;
}

// console.log(
//   pairUpClassmates([
//     [1, ['Math', 'Science', 'Art']],
//     [2, ['Math', 'English', 'Science']],
//     [3, ['Art', 'English']]
//   ])
// );

function orderClasses(classesList) {
  const fullList = [];
  classesList.forEach((classes) => {
    classes.forEach((className, index) => {
      console.log(fullList);
      if (!fullList.includes(className)) {
        const prevClass = classes[index - 1];
        const nextClass = classes[index + 1];
        if (prevClass && fullList.indexOf(prevClass) > -1) {
          fullList.splice(fullList.indexOf(prevClass) + 1, 0, className);
          return;
        }
        if (nextClass && fullList.indexOf(nextClass) > -1) {
          fullList.splice(fullList.indexOf(nextClass) - 2, 0, className);
          return;
        }
        fullList.push(className);
      }
    });
  });
  // return fullList[Math.round(fullList.length/2)]
  return fullList;
}

console.log(
  orderClasses([
    ['Art', 'Science'],
    ['Math', 'Art'],
    ['Science', 'English']
  ])
);

// [1,2,3,4,5] x 13
