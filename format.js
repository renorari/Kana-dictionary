const fs = require("fs");

const content = require("./kanationary.json");
const format = JSON.stringify(content, null, 4);
fs.writeFileSync("./kanationary.json", format)
