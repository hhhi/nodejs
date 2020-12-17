var filterFn = require('./mymodule.js')
var dir = "C:/Users/ASUS/Desktop/checkpointNode"
var filterStr = process.argv[2]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})