const mongoose = require('mongoose');
const Medicine = require('../models/medicine');

exports.medicines_get_all = (req, res, next) => {
    Medicine.find()
    .select('image title price')
    .exec()
    .then(docs => {
        const response = {
            count : docs.length,
            medicines : docs.map(doc => {
                return {
                    title : doc.title,
                    image : 'http://localhost:3030/public/uploads/'+doc.image,
                    price : doc.price,
                    _id   : doc._id,
                    quantity : doc.quantity,
                    description : doc.description, 
                
                request : {
                    type : 'GET',
                    url : 'http://localhost:3030/medicines/' + doc._id

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



exports.medicines_create_medicine = (req, res, next) => {
    const medicine = new Medicine ({
        title : req.body.title,
        price : req.body.price,
        quantity : req.body.quantity,
        description : req.body.description,
        image : req.newFileName,
        _id : new mongoose.Types.ObjectId(),
     });
    medicine
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message : "created medicine",
            createdMedicine : medicine,
            request : {
                type : "GET",
                url : "http://localhost:3030/medicines/" + result._id
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

exports.medicines_get_medicine = (req, res, next) => {
    const id =  req.params.medicineId;
    Medicine.findById(id)
    .exec()
    .then(doc => {
        console.log("fetching data from database", doc);
        if(doc){
            res.status(200).json({
                Medicine : doc,
                request : {
                    type : 'GET',
                    url : "http://localhost:3030/medicines/" + doc._id
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

// exports.foods_update_food = (req, res, next) => {
//     const id = req.params.foodId;
//     const updateOps = {};
//     for(const ops of req.body) {
//       updateOps[ops.propName] = ops.value;
//     }
//     Food.update({ _id: id }, { $set: updateOps })
//       .exec()
//       .then(result => {
//         res.status(200).json({
//           message: "Food updated",
//           request: {
//             type: "GET",
//             url: "http://localhost:3030/foods/" + id
//           }
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({
//           error: err
//         });
//       });
//   };
 

exports.medicines_delete_medicine = (req, res, next) => {
    const id = req.params.medicineId;
    Medicine.remove({_id : id })
    .exec()
    .then(result => {
     res.status(200).json({
         message : 'Medicine item deleted!',
         request : {
             type : 'POST',
             url : "https://localhost:3030/medicines",
             body : {
                 title : 'String',
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