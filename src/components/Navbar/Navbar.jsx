import React, { useState } from 'react';
import BurgerButton from "./BurgerButton";
import MobileMenu from './MobileMenu';


function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick = () => {
        setToggleBurger(!toggleBurger);
    }

    return (
        <div className='flex items-center content-wrapper'>
            <div className='w-full relative'>
                
                <div className={`sm:hidden transform transition-transform duration-300 absolute w-full ${toggleBurger ? 'translate-y-0' : '-translate-y-full'}`}>
                    <MobileMenu />
                </div>

                
                <div className='sm:hidden'>
                    <BurgerButton toggleBurger={toggleBurger} onClick={handleClick} />
                </div>

                
            </div>
        </div>
    );
}

export default Navbar;