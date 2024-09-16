const crypto = require("crypto");

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr =
      `
    harkirat => Amaan | Rs 100
    Amaan => CryptoGuy | Rs 100
    ` + input.toString();
    let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}

// Find and print the input string and hash
const result = findHashWithPrefix("00000");
console.log(`Input: ${result.input}`);
/* 
Input: 
harkirat => Amaan | Rs 100 
Amaan => CryptoGuy | Rs 100
52297
*/
console.log(`Hash: ${result.hash}`); //0000066b0ead710f1a9de4361dfc38de88c7cb9714439b605bd772e830e64c23
