const fs = require('fs')  
const file = "C:/Users/ASUS/Desktop/checkpointNode/my-first-io-text.txt" 
  
fs.readFile(file, function (err, contents) {  
    
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})