const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title : String,
    description : String

});

module.exports = mongoose.model("Food", foodSchema);