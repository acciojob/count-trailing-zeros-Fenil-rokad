function trailingZeros(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Take input from user
let input = prompt("Enter a non-negative integer:");
let number = parseInt(input);

// Check if valid number
if (!isNaN(number) && number >= 0) {
  alert(trailingZeros(number));
} else {
  alert("Please enter a valid non-negative integer.");
}
