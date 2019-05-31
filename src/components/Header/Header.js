import React from 'react';
import './Header.scss';
import logo from  '../../img/logonaranja.jpg';

class Header extends React.Component{
    render(){
        return(
            <header className="main-header">
                <h1 className="main-header__logo">
                    <a href="index.html">
                    <img src={logo} className="logo__img" alt="logo" />
                    </a>
                </h1>
            </header>
        );
    }
}

export default Header;