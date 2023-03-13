const express= require('express');
const studentschema = require('../model/modelStudent');
const router = express.Router();
const listStudents = Array();

router.post('/students', function(req, res){
   const user =studentschema(req.body);
   user.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))

});

// get all students
router.get('/students', (req, res)=>{
    studentschema.find()
        .then(function(data){
            res.json(data)
        })
        .catch((error)=>res.json({message:error}))
})

// get a student
router.get('/students/:id', (req, res)=>{
    const {id}= req.params;
    studentschema.findOne({id:id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

// update a user
router.put('/students/:id', (req, res)=>{
    const{id}= req.params;
    const {name,age,email}= req.body;

    studentschema.updateOne({_id:id},{$set:{name,age,email}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

// delete a user
router.delete('/students/:id', (req, res)=>{
    const{id}= req.params;

    studentschema.deleteOne({_id:id})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})



module.exports = router;
