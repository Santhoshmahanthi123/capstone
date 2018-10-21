const mongoose = require('mongoose');
const Food = require('../models/food');

exports.foods_get_all = (req, res, next) => {
    res.status(200).json({
        message : " this is for getting products"
    });
}


exports.foods_create_food = (req, res, next) => {
    const food = new Food ({
        title : req.body.title,
        price : req.body.price,
        description : req.body.description
    });
    res.status(201).json({
        message : " created food product",
        createdFood : food
    });
    // food
    // .save()
    // .then(result => {
    //     console.log(result);
    // res.status(201).json({
    //     message : "created one food product successfully",
    //     createdFood : food
    //      });
    // })
    // .catch(err => {
    //     res.status(500).json({
    //         error : err
    //     });
    // })
    
}

exports.foods_get_food = (req, res, next) => {
    res.status(200).json({
        message : " this is for getting single product"
    });
}

exports.foods_update_food = (req, res, next) => {
    res.status(200).json({
        message : " this is for updating single product"
    });
}

exports.foods_delete_food = (req, res, next) => {
    res.status(200).json({
        message : " this is for deleting single product"
    });
}