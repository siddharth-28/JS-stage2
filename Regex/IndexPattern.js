console.log("(2)pattern at index");
let input = "A string with 3 numbers in it...and 42 and 88 were present.";
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log("Found", match[0], "at", match.index);
}
console.log("");