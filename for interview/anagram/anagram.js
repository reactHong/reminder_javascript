// Reference: https://www.youtube.com/watch?v=YCpxWfxU0NQ

/**
 * Write a function to determine if one String is 
 * a case-insensitive anagram of another String
 * 
 * bacd bacd - true
 * abcd ddbbccaa - false
 * abcd bacf - false
 */

 let isAnagram = function (str1, str2) {
  if (typeof str1 !== 'string' && typeof str2 !== 'string') return false;
  if (str1.length !== str2.length) return false;
  
  const sortedStr1 = str1.split('').sort().join('').toLowerCase();
  const sortedStr2 = str2.split('').sort().join('').toLowerCase();

  return sortedStr1 === sortedStr2;

  // const sortedStr1 = str1.split('').sort();
  // const sortedStr2 = str2.split('').sort();

  // let isFlag = true;

  // for (let i=0; i<str1.length; i++) {
  //   if (sortedStr1[i] !== sortedStr2[i]) {
  //     isFlag = false;
  //   }
  // }

  // return isFlag;
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));