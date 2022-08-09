import React, {useContext} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Header from './Header';
import AuthContext from './context/Auth.context';
function App() {

  // const auth = useContext(AuthContext);
  // console.log(auth.auth)
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;