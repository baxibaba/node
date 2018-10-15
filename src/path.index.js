var path = require('path')

var a = path.basename("./somepackage/lib/interface.js",".js")
var dirname = path.dirname(__dirname+'/somepackage/lib/interface.js')

var normalize = path.normalize('/dist/style/sytle.min.css////dir\\dir\\dir')
console.log(normalize)
console.log(dirname)
console.log(a)
console.log(process.env.PATH)
