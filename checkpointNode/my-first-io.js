const fs = require('fs')


var contents = fs.readFileSync("C:/Users/ASUS/Desktop/checkpointNode/my-first-io-text.txt")  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)
