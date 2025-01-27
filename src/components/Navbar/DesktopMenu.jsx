import React from 'react';
import logoVintzen from '../../assets/images/logo-vintzen.svg';
import { motion } from "motion/react"

const DesktopMenu = () => {
    return (
        <nav className="w-full flex">
                <motion.img initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2 }} src={logoVintzen} className='absolute top-5 left-10 lg:left-24 w-32' alt="" />
                <div className='mt-5 flex justify-center readex-pro space-x-5 mx-auto'>

                    <a href="#hero" className="abril-fatface text-base hover:text-blue-600 transition">Accueil</a>
                    <a href="#features" className="abril-fatface text-base hover:text-blue-600 transition">Fonctionnalitées</a>
                    <a href="#prices" className="abril-fatface text-base hover:text-blue-600 transition">Tarifs</a>
                    <a href="#opinions" className="abril-fatface text-base hover:text-blue-600 transition">Avis</a>
                    <a href="#news" className="abril-fatface text-base hover:text-blue-600 transition">Actualitées</a>
                    <a href="#footer" className="abril-fatface text-base hover:text-blue-600 transition">Contact</a>

                </div>
            </nav>
    );
};

export default DesktopMenu;