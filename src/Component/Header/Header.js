import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Hook/firebase-init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <nav className='header'>
            <img src={logo} alt='' />
            <div>
                <Link to='/'>Shop</Link>
                <Link to='orders'>Order</Link>
                <Link to='Inventory'>Inventory</Link>
                <Link to='about'>About</Link>
                {
                    user
                    ?
                    <Link onClick={logout} to='login'>Log-Out</Link>
                    :
                    <Link to='login'>Log-In</Link>
                    
                }
            </div>
        </nav>
    );
};

export default Header;