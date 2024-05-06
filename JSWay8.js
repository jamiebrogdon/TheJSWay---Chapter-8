//CHAPTER 8
// Word info:
// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

// Vowel count:
// Improve the previous program so that it also shows the number of vowels inside the word.

// Backwards word:
// Improve the previous program so that it shows the word written backwards.

// Palindrome:
// Improve the previous program to check if the word is a palindrome. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// For example, "radar" should be detected as a palindrome, "Radar" too:

const word = prompt("Enter a word:");

console.log(`The word ${word} is ${word.length} characters long`);
console.log(`Its lowercase value is ${word.toLowerCase()}`);
console.log(`Its uppercase value is ${word.toUpperCase()}`);

let vowelCount = 0;
let backwardWord = "";

[...word].forEach(letter => {
  const lowerLetter = letter.toLowerCase();
  if (
    lowerLetter === "a" ||
    lowerLetter === "e" ||
    lowerLetter === "i" ||
    lowerLetter === "o" ||
    lowerLetter === "u" ||
    lowerLetter === "y"
  ) {
    vowelCount++;
  }
  // Adding letter at the beginning of the backward string
  backwardWord = letter + backwardWord;
});

console.log(`It has ${vowelCount} vowels`);
console.log(`Its backwards value is ${backwardWord}`);
if (word.toLowerCase() === backwardWord.toLowerCase()) {
  console.log("It's a palindrome");
}