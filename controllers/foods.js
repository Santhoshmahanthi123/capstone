const mongoose = require('mongoose');
const Food = require('../models/food');

exports.foods_get_all = (req, res, next) => {
    res.status(200).json({
        message : " this is for getting products"
    });
}


exports.foods_create_food = (req, res, next) => {
    res.status(200).json({
        message : "this is for posting "
    });
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