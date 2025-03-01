const { json } = require('body-parser');
var express = require('express');
//const dotenv = require('dotenv').config();
var app = express();
const bodyParser = require('body-parser');

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
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
},
  bodyParser.urlencoded({extended: false}))

app.get('/now',function(req,res,next){
  req.time = new Date().toString();
  next();
},function(req,res){
  res.json({time: req.time})
})

app.get('/:word/echo',(req,res)=>{
  console.log(req.params.word);
  res.json({echo: req.params.word});
})

app.route('/name')
  .get((req,res,next)=>{
    const firstname = req.query.first;
    const lastname = req.query.last;
    //console.log(lastname);
    res.json({
      name: firstname + ' ' + lastname
    });
    next();
  })
  .post((req,res,next)=>{
    const firstname = req.body.first;
    const lastname = req.body.last;

    res.json({
      name: firstname + ' ' + lastname
    });
  })

 module.exports = app;