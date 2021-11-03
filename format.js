const fs = require("fs");

const content = require("./kanationary.json");
const format = JSON.stringify(content, null, );
fs.writeFileSync("./kanationary.json", format)
