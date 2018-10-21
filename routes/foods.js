const express = require("express");
const router  = express.Router();
const mongoose = require("mongoose");
const FoodsController = require('../controllers/foods');


router.get('/',FoodsController.foods_get_all);

router.post('/',FoodsController.foods_create_food);

router.get('/:foodId',FoodsController.foods_get_food);

router.patch('/:foodId',FoodsController.foods_update_food);

router.delete('/:foodId',FoodsController.foods_delete_food);







module.exports = router;