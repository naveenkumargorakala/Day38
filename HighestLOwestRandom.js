const numbers = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  numbers.push(randomNumber);
}

let highest = numbers[0];
let lowest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > highest) {
    highest = numbers[i];
  }
  if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}

console.log(`Random numbers: ${numbers}`);
console.log(`Highest number: ${highest}`);
console.log(`Lowest number: ${lowest}`);