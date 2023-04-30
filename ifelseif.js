const digit = Math.floor(Math.random() * 10) + 1;

let word;
if (digit === 0) {
  word = "zero";
} else if (digit === 1) {
  word = "one";
} else if (digit === 2) {
  word = "two";
} else if (digit === 3) {
  word = "three";
} else if (digit === 4) {
  word = "four";
} else if (digit === 5) {
  word = "five";
} else if (digit === 6) {
  word = "six";
} else if (digit === 7) {
  word = "seven";
} else if (digit === 8) {
  word = "eight";
} else if (digit === 9) {
  word = "nine";
} else {
  word = "invalid digit";
}


console.log(`The word representation of ${digit} is ${word}.`);
