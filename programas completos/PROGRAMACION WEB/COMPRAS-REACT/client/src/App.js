import './App.css';

import AllUsers from './componentes/AllUsers';
import Home from './componentes/Home';
import AddUser from './componentes/AddUser';
import EditUser from './componentes/EditUser';
import AdminUserL from './componentes/AdminUserL';
import AdminUserR from './componentes/AdminUserR';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path= "/adminUserL" element = {<AdminUserL/>}/>
            <Route path= "/adminUserR" element = {<AdminUserR />}/>
            <Route path= "/edit/:id" element = {<EditUser />}/>
        </Routes>
                
    </BrowserRouter>
  );
}

export default App;
