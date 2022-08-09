import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLocation} from 'react-router-dom';

function Header() {
    let location = useLocation();
    const [myPath, setMypath] = useState();
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

        test
        </>
    );
}

export default Header;