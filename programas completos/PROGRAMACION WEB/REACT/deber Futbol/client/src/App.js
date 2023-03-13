import './App.css';

import AllTeams from './componentes/AllTeams';
import NavBar from './componentes/NavBar';
import AddTeam from './componentes/AddTeam';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path = "/" element = {<AllTeams/>}/>
            <Route path= "/add" element = {<AddTeam />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
