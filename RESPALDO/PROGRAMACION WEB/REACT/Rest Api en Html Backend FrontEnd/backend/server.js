const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {cars}= require('./cars.js');
const port = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/cars', showCars);
app.get('/api/cars/:id', showCar);
app.delete('/api/cars/:id', deleteCar);
app.post('/api/cars', addCar);
app.put('/api/cars',updateCar);


app.listen(port , ()=>{console.log('listening on port ' + port);});

function showCars(req,res) {

    res.send({ok:true, result: cars});
}

function showCar(req,res) {
    const carId= parseInt(req.params.id);
    const car= cars.filter(car => car.id === carId);
    res.send({ok: true, result: car[0]}); 
}

function deleteCar(req,res) {
    const carId= parseInt(req.params.id);
    const position= cars.findIndex(car=> car.id === carId);
    cars.splice(position, 1);
    res.send({ok: true});
}

function addCar(req, res){
    const maxId = cars.reduce((acc, cur)=>{
        if( cur.id> acc)
            acc= cur.id; 
        return acc;
        },0);
    
    const newCar ={
        id: maxId + 1,
        marca: req.body.marca,
        model: req.body.model,
    };

    cars.push(newCar);
    res.send({ok: true});
}

function updateCar(req, res) {
    
    const carId= parseInt(req.body.id);
    const car = {
        id: carId,
        marca: req.body.marca,
        model: req.body.model,
    }
    const position= cars.findIndex(car=> car.id === carId);
    cars[position]= car;
    res.send({ok: true});
}

