var express = require('express');
var app = express();

const absolutePath = __dirname + '/views/index.html';

console.log('Hello World');

// app.get('/',function(req,res){
//   res.send('Hello Express');
// })

app.get('/',function(req,res){
  res.sendFile(absolutePath);
})



 module.exports = app;
