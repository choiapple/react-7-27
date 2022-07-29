import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>SSGMALL</h1>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                </ul>
            </nav>
        </header>
    );
}
export default Header;