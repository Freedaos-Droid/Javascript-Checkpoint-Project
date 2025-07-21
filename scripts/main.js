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


