const express = require('express');
const Conection = require('./database/database.js');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser= require('body-parser');
const Routes = require('./routes/routes.js');
const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/',Routes);

const port = process.env.PORT || 3004;
const username= process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;

Conection(username, password);

app.listen(port, function() {console.log('listening on port ' + port);});