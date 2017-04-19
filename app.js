'use strict'

const express = require('express');
const bodyParser = require('body-parser');
// <Include the router index file>
var routes = require('./routes/')
var app = express();


// <Setup your routes middleware>
app.use(bodyParser.json());
app.use('/api/v1/',routes)

// <catch any undefined routes with a 404 middleware>
app.use((req,res,next)=>{
  var err = new Error('Not found')
  err.status = 404;
  next(err);
});
// <Handle any errors that occur in the routing with error handlers defined at the bottom of our
// middleware stack>
if (app.get('env') === 'development') {
  app.use ((err,req,res,next)=>{
    console.log("error from res",err)
    res.status(err.status || 500)
    res.json ({
      message: err.message,
      error: err
    });
  });
};

app.use((err,req,res,next)=>{
  console.log("error from production", err)
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`listening to ${port}`)
})

module.exports = app;
