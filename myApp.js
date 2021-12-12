var express = require('express');
var app = express();

const absolutePath = __dirname + '/views/index.html';


console.log('Hello World');
console.log(__dirname);
// app.get('/',function(req,res){
//   res.send('Hello Express');
// })

app.use('/public',express.static(__dirname+'/public'));

app.get('/',function(req,res){
  res.sendFile(absolutePath);
  
})




 module.exports = app;
