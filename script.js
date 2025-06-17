function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = prompt("Enter a non-negative integer:");
const num = parseInt(input);

if (!isNaN(num) && num >= 0) {
  alert("Trailing zeros in " + num + "! is: " + trailingZeros(num));
} else {
  alert("Please enter a valid non-negative integer.");
}
