const fs = require("fs");
const path = require("path");

const sourceDir = process.argv[2];
const targetDir = process.argv[3];

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

fs.readdir(sourceDir, (err, files) => {
  if (err) return console.log(err.message);

  files.forEach(file => {
    const srcFile = path.join(sourceDir, file);
    const destFile = path.join(targetDir, file);

    fs.stat(srcFile, (err, stats) => {
      if (err) return;

      if (stats.isFile()) {
        fs.copyFile(srcFile, destFile, (err) => {
          if (err) {
            console.log("Error copying", file);
          } else {
            console.log("Synced:", file);
          }
        });
      }
    });
  });
});
