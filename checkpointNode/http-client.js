var http = require('http')
// http://www.google.com/index.html
http.get(process.argv[2], function (response) 
{
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
.on('error', console.error)  