const fs = require("fs");

// CREATE
fs.writeFileSync("data.txt", "Hello, this is my first file!");
console.log("File created successfully");

// READ
let data = fs.readFileSync("data.txt", "utf-8");
console.log("File content:", data);

// UPDATE
fs.appendFileSync("data.txt", "\nThis is updated content.");
console.log("File updated successfully");

// READ again
data = fs.readFileSync("data.txt", "utf-8");
console.log("Updated content:", data);

// DELETE
fs.unlinkSync("data.txt");
console.log("File deleted successfully");