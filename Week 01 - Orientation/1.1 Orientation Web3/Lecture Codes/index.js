const crypto = require("crypto");

const input = "100xdevs";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash); // Output: 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d

const input2 = "crpto";
const hash2 = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash2); // Output: 51965a336d5a5ea56441cf3d924e9ab6628dcf1f907ab76fa6256d7ddbf5aa86