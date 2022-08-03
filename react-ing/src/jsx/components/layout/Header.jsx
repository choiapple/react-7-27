import React, { Fragment } from 'react';
import styles from './Header.module.css';
import SearchBox from '../ui/SearchBox';

function Header(){
    return(
        <Fragment>
            <div className={styles.Navi}>
                test
            </div>
            <SearchBox />
        </Fragment>
    );
}

export default Header;
