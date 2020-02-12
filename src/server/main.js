const express = require('express');
const app = express();
const router  = require('./router');
require('dotenv').config();
app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded());
var cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });
app.use('/api',router);
const path = require('path');


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'./../../build/index.html'));
});

app.use(function(req,res,next){
    const err = new Error('not found');
    err.status = 404;
    next(err);
})
app.listen(3001);