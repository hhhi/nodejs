var result = 0

for (var i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i])

if(result == 0){
    console.log('EMPTY ARGV')
}
else{
console.log(result)
}