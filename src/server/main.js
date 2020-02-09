const express = require('express');
const app = express();
const router  = require('./router');
require('dotenv').config();
app.use(express.static('build'));
app.use(express.json());
app.use(express.urlencoded());
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