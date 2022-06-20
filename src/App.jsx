
import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartContextProvider from "../src/components/context/CartContext";
import { LogIn } from '../src/components/Login/LogIn';
import './index.css';


function App() {
  return (
    
    <BrowserRouter>
    <CartContextProvider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="Bienvenido a nuestro Shopp...aprovecha el Hot Sale!"/>} />
          <Route path="/category/:id" element = { <ItemListContainer  /> } /> 
          <Route path="//detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element = { <Cart /> } />
          <Route path='login' element={<LogIn/>}/>
          <Route path="/*" element={<Navigate to="/" replace/>} />
        </Routes>
      </div>
      </CartContextProvider>
    </BrowserRouter>
 
  );
}

export default App;