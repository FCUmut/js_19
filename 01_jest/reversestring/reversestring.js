// Solution - 1

// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str.charAt(i);
//   }
//   return result;
// }

// Solution - 2

// function reverseString(str) {
//   return str.split("").reverse().join(""); // to use reverse() function, you need to turn string into an array, we use split() to turn every letters into array elements and after using reverse(), we use join() to get them together and turn into string
// }

// Solution - 3

// function reverseString(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution - 4

function reverseString(str) {
  // reduce is high order array method
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, ""); // Initialize reversed as an empty string
}

module.exports = reverseString;
