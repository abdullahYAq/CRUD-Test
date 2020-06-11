const express = require('express');

const app = express();
const bodyParser = require('body-parser');


const mongoose = require('mongoose');

require('dotenv/config');

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/mydb', {useNewUrlParser: true}, (err) =>{
    
    console.log("Db connected successfully")
    
});


// var port = 4522;
const indexRoute = require('./routes/index');
app.use('/', indexRoute);
app.listen(4522);