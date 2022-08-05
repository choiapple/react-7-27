import React from 'react';
import Cart from './Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './Product';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/cart" element={< Cart/>}/>
      <Route path="/product" element={<Product />}>
      <Route path=":productId" element={<Product />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;