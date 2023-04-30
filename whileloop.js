const n = 67;

let low = 1;
let high = 100;

while (true) {
  const midpoint = Math.floor((low + high) / 2);

  const answer ="l";

  if (answer === "l") {
    high = midpoint - 1;
  } else if (answer === "g") {
    low = midpoint + 1;
  } else {
    console.log("Invalid answer. Please enter 'l' or 'g'.");
    continue;
  }

  if (low === high) {
    console.log(`The Magic Number is ${low}!`);
    break;
  }
}
