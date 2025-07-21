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

// Mathematial Functions
// function to factorial
function factorial(n) {
  if (n < 0) return undefined; // factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// function to check for prime numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//function for fibonacci sequence
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
