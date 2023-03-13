import app from './app';
import Conection from './database/database';

const port = process.env.PORT || 3000;
const username= "AndresValarezo";
const password= "admin";

Conection(username, password);

app.listen(port, ()=> {console.log('listening on port '+port);});