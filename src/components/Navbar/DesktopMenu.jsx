import React from 'react';
import logoVintzen from '../../assets/images/logo-vintzen.svg';
import { motion } from "motion/react"
import NavbarButton from '../Misc/NavbarButton';
const DesktopMenu = () => {
    return (
        <nav className="w-full flex">
                <motion.img initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2 }} src={logoVintzen} className='absolute left-10 top-8 lg:left-2 w-32'/>
                <div className='flex justify-center items-center readex-pro space-x-5 mx-auto bg-custom-purple text-white rounded-lg py-2 px-3 mt-5'>

                    <a href="#hero" className="abril-fatface text-base transition">Accueil</a>
                    <a href="#features" className="abril-fatface text-base transition">Fonctionnalitées</a>
                    <a href="#prices" className="abril-fatface text-base transition">Tarifs</a>
                    <a href="#opinions" className="abril-fatface text-base hover:text-custom-green transition">Avis</a>
                    <a href="#news" className="abril-fatface text-base transition">Actualitées</a>
                    <a href="#footer" className="abril-fatface text-base transition">Contact</a>

                    <NavbarButton href={'#prices'} text={'Commencez Maintenant !'} /> 

                </div>
            </nav>
    );
};

export default DesktopMenu;