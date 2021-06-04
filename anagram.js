function compare(strA, strB) {
  const sortedA = charMap(strA.replace(/[^\w]/g, '').toLowerCase());
  const sortedB = charMap(strB.replace(/[^\w]/g, '').toLowerCase());
  
  // return false immediately when the length of two char Map is not the same
  if (Object.keys(sortedA).length !== Object.keys(sortedB).length) {
    return false;
  }

   // comparison
  for (let char in sortedA) {
    if (sortedA[char] !== sortedB[char]) {
      return false;
    }
  }

  return true;
}

// helper function
function charObj(str) {
  let charObj = {};
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

console.log(compare('RAIL! SAFETY!', 'fairy tales'));