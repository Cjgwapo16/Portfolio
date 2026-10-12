const fs = require("node:fs");
const path = require("node:path");
const { html } = require("./index");

const outputDirectory = path.join(__dirname, "public");
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "index.html"), html, "utf8");
console.log("Generated public/index.html");
