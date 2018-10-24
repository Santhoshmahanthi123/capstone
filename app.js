const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const foods = require('./models/food');
const medicines = require('./models/medicine');

app.get('/',(req, res, next) => {    
    res.send('Welcome to InNeed 24/7 ');
});

mongoose.connect('mongodb://Sparjan:Sparjan123@ds135993.mlab.com:35993/capstone',{
    useNewUrlParser : true
}
);

mongoose.Promise = global.Promise;

//route
const foodRoutes = require('./routes/foods');
const medicineRoutes = require('./routes/medicines');

 
//front-end for require from helpers->hbs.js
// const select = require('./helpers/hbs');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());


//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");

if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});
}
    next();
});

//routes 
app.use('/foods',foodRoutes);
app.use('/medicines',medicineRoutes);

//error handling 
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//error handling in application
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
        message : error.message
         }
    });
});

module.exports = app;

