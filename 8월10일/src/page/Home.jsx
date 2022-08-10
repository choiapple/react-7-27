import React, { useContext } from 'react';
import ThemeContext from '../context/Theme.context';
import ThemeBox from './ThemeBox';

function Home() {
    const Theme = useContext(ThemeContext)
    console.log(Theme)
    return (
        <>
            <h1>Home</h1>
            <ThemeBox />
        </>
    );
}

export default Home;