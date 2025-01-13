import React, { useState } from 'react';
import BurgerButton from "./BurgerButton";
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import logoVintzen from '../../assets/images/logo-vintzen.svg';

function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick = () => {
        setToggleBurger(!toggleBurger);
    }

    return (
        <div className='flex items-center content-wrapper'>

            <div className='w-full relative'>

                

                <div className={`md:hidden transform transition-transform duration-300 absolute w-full ${toggleBurger ? 'translate-y-0' : '-translate-y-full'}`}>
                    <MobileMenu />
                </div>
                
                <div className='md:flex hidden'>
                    <DesktopMenu />
                </div>

                <div className={`md:hidden block w-full z-50 bg-white p-5 absolute`}>
                    <BurgerButton toggleBurger={toggleBurger} onClick={handleClick} />
                    <img src={logoVintzen} className='m-auto w-32' alt="" />
                </div>

            </div>
        </div>
    );
}

export default Navbar;