var fs = require("fs");
var sys_path = require('path')
const h = __dirname
const SRC = __dirname.substr(0, __dirname.indexOf('/src/') + 5);

var checkDir = fs.existsSync("checkDir");
console.log(checkDir);
console.log(h)
console.log(SRC)