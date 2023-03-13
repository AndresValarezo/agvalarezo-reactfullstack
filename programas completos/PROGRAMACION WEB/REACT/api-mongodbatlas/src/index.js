
const userRoutes = require('./routes/user')
const express= require('express');
const mongoose= require('mongoose');

const app = express();
const port = process.env.port || 9000;


//variables
const MONGODB_URI= "mongodb+srv://AndresValarezo:admin@cluster0.yxwn5.mongodb.net/?retryWrites=true&w=majority"
//middleware
app.use(express.json())
app.use('/api', userRoutes)


//rutas
app.get('/', (req,res)=>
{
    res.send('Welcome to my Api');
});


//coneccion a mongodb atlas
mongoose
    .connect(MONGODB_URI)
    .then(()=>{console.log("Connected to MongoDB Atlas");})
    .catch(err=>{console.log("Error connecting to MongoDB Atlas")})

app.listen(port, ()=>console.log('listening on port '+port));
