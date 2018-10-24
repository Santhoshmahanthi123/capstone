const express = require("express");
const router  = express.Router();
const mongoose = require("mongoose");
const multer = require('multer'); 
const FoodsController = require('../controllers/foods');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
     filename: function(req, file, callback) {
      callback(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, callback) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      callback(null, true);
    } else {
      callback(null, false);
    }
  };
  // stores in uploads folder
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });


router.get('/',FoodsController.foods_get_all);

router.post('/', upload.single('image'),FoodsController.foods_create_food);

router.get('/:foodId',FoodsController.foods_get_food);

// router.patch('/:foodId',FoodsController.foods_update_food);

router.delete('/:foodId',FoodsController.foods_delete_food);

module.exports = router;