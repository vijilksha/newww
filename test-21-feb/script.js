const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", { encoding: "utf8" });
const writeableStream = fs.createWriteStream("output.txt");
readableStream.pipe(writeableStream);

writeableStream.on("finish", () => {
  console.log("welcome all");
});
