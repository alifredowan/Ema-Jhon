import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div>
                <a>Shop</a>
                <a>Order</a>
                <a>Invertory</a>
                <a>About</a>
            </div>
        </nav>
    );
};

export default Header;