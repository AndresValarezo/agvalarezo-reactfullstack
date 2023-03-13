import React, { state, setState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import ListaTareas from '../ListaTareas/ListaTareas'
import Inicio from '../Inicio/Inicio'
import Registro from '../Registro/Registro'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: props.name,
      count: 0
    }
  }
  domContainer = document.querySelector('#like_button_container');
  render() {
    return (
      <div>
        <header>
          <nav>
            <h1>navegacion</h1>
            <Link to="/">Inicio</Link> | 
            <Link to="/registro">Registro</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </main>
        <footer><h1>pie</h1></footer>
      </div>
    )
  }
}

export default App;
