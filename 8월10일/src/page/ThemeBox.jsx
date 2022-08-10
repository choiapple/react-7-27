import React, { useContext } from 'react';
import ThemeContext from '../context/Theme.context';

function ThemeBox() {
    const theme = useContext(ThemeContext)
    return (
        <div className ={theme.isDark ? 'myBox isDark':'myBox'}></div>
    );
}

export default ThemeBox;