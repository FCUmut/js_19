// Solution - 1

// function palindrome(str) {
//   if (str.split("").includes(" ")) {
//     return false;
//   } else if (str.split("").reverse().join() === str.split("").join()) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution - 2

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
