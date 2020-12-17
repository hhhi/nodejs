var fs = require('fs')
var path = require('path')

var folder = 'C:/Users/ASUS/Desktop/checkpointNode'
var ext = '.' + process.argv[2]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(" hathoum les fichiers li nhb nkharjhm : ",file)
      }
  })
})