function trailingZeros(n) {
      let count = 0;
      for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
        count += Math.floor(n / i);
      }
      return count;
    }

    const input = prompt("Enter a non-negative integer:");
    const num = parseInt(input);

    if (!isNaN(num) && num >= 0) {
      const result = trailingZeros(num);
      alert("Trailing zeros in " + num + "! is: " + result);
    } else {
      alert("Please enter a valid non-negative integer.");
    }