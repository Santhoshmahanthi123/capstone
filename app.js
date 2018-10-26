require('dotenv').config();
const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 3030;
const app = express();
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
app.use(cors());
const foodRoutes = require('./routes/foods');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/orders');
const medicineRoutes = require('./routes/medicines');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const development = process.env.NODE_ENV;
console.log(process.env.DBUSER, process.env.DBPASSWORD);
console.log( process.env.JWTKEY);
const DATABASEURL=process.env.DATABASEURL;
const SID = process.env.SID;
const TOKEN = process.env.TOKEN;
const client = require('twilio')(SID,TOKEN);
console.log(process.env.DATABASEURL);
console.log(process.env.SID,process.env.TOKEN);
mongoose.connect(DATABASEURL,{useNewUrlParser: true})
//removing deprecation warnings 
mongoose.Promise = global.Promise;
//gives logs for nodejs like requests
app.use(morgan('dev'));
//allows static files to be accessed publicly available
app.use('/uploads',express.static('uploads'));
//body parser parses the url encoded and json data in proper format

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//giving CORS(Cross Origin Resource Sharing) permissions to anyone who requests to these end points
app.use((req,res,next)=>{
    //* will give access to any origin
 res.header('Access-Control-Allow-Origin','*');
//  res.header('Access-Control-Allow-Origin','Origin,X-Requested-With,Content-Type,Accept');
//  if(req.method === 'OPTIONS'){
//      res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
//      return res.status(200).json({});
//  }
 next();
});


app.get('/twilio',(req,res)=>{
  client.messages
  .create({
       from :'+15129576906',
       body : 'Hey someone has ordered your product in InNeed.!',
       to: '+918332895582',
     })
     .then(message => res.json({'message':'Twilio is working successfully!'}))
     .catch((err) => {res.json(err)})
     .done();
});


app.use('/user',userRoutes);
app.use('/foods',foodRoutes);
app.use('/orders',orderRoutes);
app.use('/medicines',medicineRoutes);

app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));


//mail code start 
const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        type: 'OAuth2',
            user: 'vadlakonda.raghu5@gmail.com',
            clientId: '656338103307-q3bfioqqcls46q2epjsus4ora24js194.apps.googleusercontent.com',
            clientSecret: 'g9kS8aUEyEXk2Cs7uXDIeHxL',
            refreshToken: '1/oH3w-MQMElpTQXIhjGA2yloSKh7psSPaYd07s1fIpnk',
            accessToken: 'ya29.GltBBo437FrfyYz9_jgXqDlYIeSv28M4dX3TtF5shmAS3zxGuJiK2vRQWaixv1AQWAO1RKPKlwtHRKJ1u2z6s5ODRryJdyKG3L60oKer0SkrjEsdlaw7_sD-ySlH'
 
 
    }
 })
 
 const mailOptions = {
    from : 'Raghunath <vadlakonda.raghu5@gmail.com>',
    to: 'singumahanthisanthosh@gmail.com',
    subject : 'This mail from InNeed',
    text: 'Hi, This from InNeed Thank You for conatcting us we will get back to you soon!'
 }

 app.post('/mail',(req,res)=>{
    console.log('working')
    transporter.sendMail(mailOptions,(err, info)=>{
        console.log('inside')

        if(err) {
            console.log('Error');
        }
        else {
            console.log('Email sent');
            return res.json({"Message:":"E-mail is sent"});

        }
     });
    
 });
 
 //ends mail code

app.use((req,res,next)=>{
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
}); 
app.use((error,req,res,next)=>{
 res.status(error.status || 500);
 res.json({
     error:{
         message : error.message
     }
 });
});
app.listen(port,()=>{
    console.log(`listening to server on ${port} port`);
    
})
module.exports = app;