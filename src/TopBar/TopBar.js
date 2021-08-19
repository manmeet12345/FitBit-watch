import React from 'react';
import classes from './TopBar.module.css';

const TopBar = () => {
    return(
        <nav className = {classes.Topbar}>
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="Amazon logo"/>
        </nav>
    )
}

export default TopBar;