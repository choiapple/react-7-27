import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./jsx/layout/Footer";
import Header from "./jsx/layout/Header";
import Cart from './jsx/pages/Cart';
import Home from './jsx/pages/Home';

function App() {
  // <Link to="/"></Link>
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;