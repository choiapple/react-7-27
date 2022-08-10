import React, {useContext, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Header from './Header';
import AuthContext from './context/Auth.context';
import ThemeContext from './context/Theme.context';

function App() {

  // const auth = useContext(AuthContext);
  // console.log(auth.auth)
  const Theme = useContext(ThemeContext)
  const [isDark, setIsDark] = useState(false)

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{isDark, setIsDark}}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </ThemeContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;