
import Login from './components/Login';
import PageInformation from './components/PageInformation';
import TableAllMedicines from './components/TableAllMedicines';
import EditMedicine from './components/EditMedicine';
import AddMedicine from './components/AddMedicine';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchMedicinesCategory from './components/SearchMedicinesName';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page" element={<PageInformation />} />
        <Route path="/all" element={<TableAllMedicines />} />
        <Route path="/edit/:id" element={<EditMedicine />} />
        <Route path="/add" element={<AddMedicine />} />
        <Route path="/findC" element={<SearchMedicinesCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
