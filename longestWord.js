const inputStr = 'hnelbulto',
  inputStrArr = ['but', 'chicken', 'no', 'hello'];

let longestWord = '';

function getLongest(str, strArr) {
  const sortedArr = [...strArr];
  sortedArr.sort((a, b) => {
    if (a.length < b.length) return 1;
    if (a.length > b.length) return -1;
    return 0;
  });

  for (arrItem of sortedArr) {
    if (hasString(str, arrItem)) {
      longestWord = arrItem;
      break;
    }
  }

  console.log(longestWord.length > 0 ? longestWord : 'no words found in string');
  return longestWord.length > 0 ? longestWord : 'no words found in string';
}

const sortArr = (a, b) => {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  return 0;
}

const hasString = (str, item) => {
  let strInd = str.indexOf(item.charAt(0)),
    itemInd = 0,
    newStr = '',
    strFound = false;

  if (strInd < 0) return strFound;

  for (let i = strInd; i < str.length; i++) {
    const strChar = str.charAt(i);

    if (strChar === item.charAt(itemInd)) {
      newStr += strChar;
      itemInd++;
    }

    if (newStr === item) break;
  }

  if (newStr === item) strFound = true;

  return strFound;
}

getLongest(inputStr, inputStrArr);