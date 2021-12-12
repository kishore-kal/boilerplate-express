const { json } = require('body-parser');
var express = require('express');
const dotenv = require('dotenv').config();
var app = express();

const absolutePath = __dirname + '/views/index.html';

var jsonObject = {"message": "Hello json"};
console.log('Hello World');
console.log(__dirname);
// app.get('/',function(req,res){
//   res.send('Hello Express');
// })

app.use('/public',express.static(__dirname+'/public'));

app.get('/',function(req,res){
  res.sendFile(absolutePath);
});

app.get('/json',function(req,res){
  if(process.env.MESSAGE_STYLE==='uppercase'){
    jsonObject.message = jsonObject.message.toUpperCase();
    // console.log(jsonObject);
  }
  res.json(jsonObject);
})




 module.exports = app;
