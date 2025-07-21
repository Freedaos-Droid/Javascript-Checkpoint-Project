// function to reverse a string 
function reverseString(str) {
  return str.split('').reverse().join('');
}

// function to count characters
function countCharacters(str) {
  return str.length;
}

// function to capitalize words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Array Functions 
// function to find max. and min.
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// function to find the sum of an array 
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
 
// function to filter array
function filterGreaterThanFive(arr) {
  return arr.filter(num => num > 5);
}
