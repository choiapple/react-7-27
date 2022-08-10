import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLocation} from 'react-router-dom';
import ThemeContext from './context/Theme.context';

function Header() {
    let location = useLocation();
    const [myPath, setMypath] = useState();
    const theme = useContext(ThemeContext);
    

    const handleDark = () =>{
        theme.setIsDark(!theme.isDark)
        console.log(theme.isDark)
    }
    // useEffect(()=>{
    //     setMypath(location.pathname)
    // }, [location])
   
    if(location.pathname === '/login'){
        return null;
    }
    return (
        <>
        {/* {
            myPath === '/login'
            ? 
            ""
            :
            "test"
        } */}
        <div onClick={handleDark}>test</div>
        </>
    );
}

export default Header;