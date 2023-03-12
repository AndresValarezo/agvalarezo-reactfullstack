
const userRoutes = require('./routes/student')
const express= require('express');
const mongoose= require('mongoose');

const app = express();
const port = process.env.port || 9000;


//variables
const MONGODB_URI= "mongodb+srv://AndresValarezo:admin@cluster0.yxwn5.mongodb.net/studentsdb?retryWrites=true&w=majority"
//middleware
app.use(express.json())
app.use('/api', userRoutes)


//rutas
app.get('/', (req,res)=>
{
    res.send('Welcome to Rest API of Edison Vaca and Andres Valarezo');
});

//coneccion a mongodb atlas
mongoose
    .connect(MONGODB_URI)
    .then(()=>{console.log("Connected to MongoDB Atlas");})
    .catch(err=>{console.log("Error connecting to MongoDB Atlas")})

app.listen(port, ()=>console.log('listening on port '+port));
