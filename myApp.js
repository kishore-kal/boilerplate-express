const { json } = require('body-parser');
var express = require('express');
//const dotenv = require('dotenv').config();
var app = express();

const absolutePath = __dirname + '/views/index.html';

var jsonObject = {"message":"Hello json"};
console.log('Hello World');
console.log(__dirname);
// app.get('/',function(req,res){
//   res.send('Hello Express');
// })

app.use('/public',express.static(__dirname+'/public'));
app.use(function(req,res,next){
  console.log(req.path);
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})
app.get('/',function(req,res){
  res.sendFile(absolutePath);
});

app.get('/json',function(req,res){
  if(process.env.MESSAGE_STYLE==='uppercase'){
    jsonObject.message = jsonObject.message.toUpperCase();
    //console.log(jsonObject);
  }
  else{
    jsonObject.message = "Hello json";
  }
  res.json(jsonObject);
})

app.use(function(req,res,next){
  console.log(req.path);
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})


 module.exports = app;