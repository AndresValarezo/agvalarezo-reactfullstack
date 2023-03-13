import './App.css';

import AllUsers from './componentes/AllUsers';
import NavBar from './componentes/NavBar';
import CodeForInterview from './componentes/CodeForInterview';
import AddUser from './componentes/AddUser';
import EditUser from './componentes/EditUser';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path = "/" element = {<CodeForInterview />}/>
            <Route path= "/all" element = {<AllUsers/>}/>
            <Route path= "/add" element = {<AddUser />}/>
            <Route path= "/edit/:id" element = {<EditUser />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
