const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const filePath = process.argv[3];
const data = process.argv[4];
const destPath = process.argv[4];

switch (command) {
  case "read":
    fs.readFile(filePath, "utf8", (err, content) => {
      if (err) return console.log(err.message);
      console.log(content);
    });
    break;

  case "write":
    fs.writeFile(filePath, data, (err) => {
      if (err) return console.log(err.message);
      console.log("File written successfully");
    });
    break;

  case "copy":
    fs.copyFile(filePath, destPath, (err) => {
      if (err) return console.log(err.message);
      console.log("File copied");
    });
    break;

  case "delete":
    fs.unlink(filePath, (err) => {
      if (err) return console.log(err.message);
      console.log("File deleted");
    });
    break;

  case "list":
    fs.readdir(filePath, (err, files) => {
      if (err) return console.log(err.message);
      files.forEach(f => console.log(f));
    });
    break;

  default:
    console.log("Invalid command");
}
