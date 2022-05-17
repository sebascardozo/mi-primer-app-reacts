
import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="Hola, soy ItemListContainer!"/>} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="imgine3d/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element = { <Cart /> } />
          <Route path ="/imagine3d/*" element ={<Navigate to ="/imagine3d" replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;