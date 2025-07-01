import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/logo.png';
const Hello = require('../assets/images/logo.png');

const Header = () => {
    const [buttonCaption, setButtonCaption] = useState('Login');

    useEffect(() => {
        // console.log('Header');
    }, [])
    return (
        <>
            <div className="flex justify-between p-4 m-1 bg-white shadow-sm">
                <div>
                    <img src={'/assets/images/logo.png'} className="w-30" alt='logo' />
                </div>
                <div className="nav-items">
                    <ul className="flex gap-4">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/cart'}>Cart</Link></li>
                        <button onClick={() => {
                            buttonCaption === 'Logout' ? setButtonCaption('Login') : setButtonCaption('Logout');
                        }}>{buttonCaption}</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;