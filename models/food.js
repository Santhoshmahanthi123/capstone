const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title : String,
    price : Number,
    description : String

});

module.exports = mongoose.model("Food", foodSchema);