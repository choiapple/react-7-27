import React from 'react';
import Content from './Content';
import Header from './Header';

function Home({cartCnt, setCartCnt}) {
    return (
        <>
            <Header />
            <Content />
        </>
    );
}

export default Home;