const mongoose = require('mongoose');
const Food = require('../models/food');

exports.foods_get_all = (req, res, next) => {
    Food.find()
    .select('image title price')
    .exec()
    .then(docs => {
        const response = {
            count : docs.length,
            foods : docs.map(doc => {
                return {
                    title : doc.title,
                    image : doc.image,
                    price : doc.price,
                    _id   : doc._id,
                    quantity : doc.quantity,
                    description : doc.description, 
                
                request : {
                    type : 'GET',
                    url : 'https://capstone-inneed.herokuapp.com/foods' + doc._id

                     }
                };
            })
        };
        res.status(200).json(response);
    })

    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
};


exports.foods_create_food = (req, res, next) => {
    const food = new Food ({
        title : req.body.title,
        price : req.body.price,
        quantity : req.body.quantity,
        description : req.body.description,
        image : req.body.image,
        _id : new mongoose.Types.ObjectId(),
     });
    food
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message : "created food ",
            createdFood : food,
            request : {
                type : "GET",
                url : "http://localhost:3000/foods" + result._id
            }
        });
    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
};

exports.foods_get_food = (req, res, next) => {
    const id =  req.params.foodId;
    Food.findById(id)
    .exec()
    .then(doc => {
        console.log("fetching data from database", doc);
        if(doc){
            res.status(200).json({
                Food : doc,
                request : {
                    type : 'GET',
                    url : "https://capstone-inneed.herokuapp.com/foods" + doc._id
                }
             });
        } else {
            // url error
            res.status(404).json({
                message : "Not a valid url"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
             error : err
            });
    });
}
exports.foods_delete_food = (req,res,next)=>{
    const id = req.params.foodId;
   Food.remove({_id : id })
   .exec()
   .then(result => {
    res.status(200).json({
        message : 'Food item deleted!',
        request : {
            type : 'POST',
            url : "https://capstone-inneed.herokuapp.com/foods",
            body : {
                name : 'String',
                price : 'Number'
            }
        }
    })
   })
   .catch( err => {
    console.log(err);
    res.status(500).json({
        error : err
    });
   });
  }