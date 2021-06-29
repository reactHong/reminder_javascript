// Reference: https://www.youtube.com/watch?v=saj9KQ3wGtc&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=17

/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
  let i = 0;
  let j = word.length-1;
  let isPalindrome = true;

  while (i <= j) {
    // console.log(word[i], word[j]);
    if (word[i] != word[j]) {
      isPalindrome = false;
      break;
    }
    i++, j--;
  }
  
  return isPalindrome;
}

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false