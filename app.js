'use strict'

const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// <Include the router index file>
var routes = require('./routes/')
// <Setup your routes middleware>
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
