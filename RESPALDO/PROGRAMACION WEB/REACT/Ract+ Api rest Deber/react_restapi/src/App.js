
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TableCountries from './components/TableLayout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TableCountries />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
