const crypto = require("crypto");

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}

// Find and print the input string and hash
const result = findHashWithPrefix("00000");
console.log(`Input: ${result.input}`); // Input: 596138
console.log(`Hash: ${result.hash}`); // 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab
