// find the longest word in an array
function longestWord(array) {
  let biggestWord = "";

  for (var word of array) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
};

// make a map of letters for a string
function mapString(string) {
  let map = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }
  return map;
};

// function to find the next index
function findNextIndex(array, minIndex) {
  for (let letter of array) {
    if (letter >= minIndex) {
      return letter + 1;
    }
  }
  return false
};

// check if the string is a subsequence
function isSubsequence(word, map) {
  let minIndex = 0;

  for (let letter of word) {
    if (map[letter]) {
      minIndex = findNextIndex(map[letter], minIndex);
      if (minIndex === false) {
        return false;
      } 
    } else {
      return false;     
    }
  }
  return true;
};

// test 
let exDict = ["he", "hello", "hell", "shell" ];
let exWord = "hellion";

function longestMatch(exampleWord, exampleDict) {
  let exampleMap = mapString(exampleWord);
  
  let exampleArray = [];
  
  for (let element of exampleDict) {
    if (isSubsequence(element, exampleMap)) {
      exampleArray.push(element);
    }
  }
  return longestWord(exampleArray);
};

console.log(exWord);
console.log(exDict);
console.log(longestMatch(exWord, exDict));
