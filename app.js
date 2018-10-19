require('dotenv').config();
var cors = require('cors');
app.use(cors());
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

console.log(process.env.DBUSER, process.env.DBPASSWORD);

mongoose.connect('mongodb://'+ process.env.DBUSER +':'+ process.env.DBPASSWORD +'@ds135993.mlab.com:35993/capstone',{ useNewUrlParser: true });

mongoose.Promise = global.Promise;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`listening to server on ${port} port`);
    
})
module.exports = app;