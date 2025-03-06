import React, { useState } from 'react';
import BurgerButton from "./BurgerButton";
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import logoVintzen from '../../assets/images/logo-vintzen.svg';
import { motion } from "motion/react"



function Navbar() {
    const [toggleBurger, setToggleBurger] = useState(false);

    const handleClick = () => {
        setToggleBurger(!toggleBurger);
    }

    return (
        <motion.div 
            initial={{ opacity: 0, translateY: -100 }} 
            animate={{ opacity: 1, translateY: 0 }} 
            transition={{ delay: 0.5, duration: 1.25 }} 
            className="flex items-center w-full z-50 lg:h-14 fixed top-0 w-fit"
        >

            <div className='w-full relative'>

                <div className={`lg:hidden transform transition-transform duration-300 absolute w-full ${toggleBurger ? 'translate-y-0' : '-translate-y-full'}`}>
                    <MobileMenu />
                </div>
                
                <div className='lg:flex hidden'>
                    <DesktopMenu />
                </div>

                <div className={`lg:hidden block w-full z-50 bg-white p-5 absolute`}>
                    <BurgerButton toggleBurger={toggleBurger} onClick={handleClick} />
                    <img src={logoVintzen} className='m-auto w-32' alt="" />
                </div>

            </div>
        </motion.div>
    );
}

export default Navbar;