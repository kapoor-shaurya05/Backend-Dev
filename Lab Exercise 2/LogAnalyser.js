const fs = require("fs");
const readline = require("readline");

let errorCount = 0;
let totalLines = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("app.log"),
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  totalLines++;
  if (line.toLowerCase().includes("error")) {
    errorCount++;
  }
});

rl.on("close", () => {
  console.log("Total Lines:", totalLines);
  console.log("Error Count:", errorCount);
});