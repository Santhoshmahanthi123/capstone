const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    // fooditem : {
    //     type : String
    // },
    description:{ 
        type : String,
        required : true
    },
    image: {
        type: String,
        required : false
        
    },
    // user : {
    //     id:{
    //         type: mongoose.Schema.Types.ObjectId, 
    //         ref: 'User',
          
    //     },
       
    // },
        
    
    date : {
        type : Date,
        default : Date.now
    },
 },
    {
        collection: 'medicines'
    
     }

);

module.exports = mongoose.model("Medicine", medicineSchema);