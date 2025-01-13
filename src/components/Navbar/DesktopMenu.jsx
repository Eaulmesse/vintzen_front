import React from 'react';

import logoVintzen from '../../assets/images/logo-vintzen.svg';

const DesktopMenu = () => {
    return (
        <nav className="w-full flex">
                <img src={logoVintzen} className='absolute top-5 left-10 lg:left-24 w-32' alt="" />
                <div className='mt-5 flex justify-center readex-pro space-x-5 mx-auto'>

                    <a href="#home" className="abril-fatface text-base">Accueil</a>
                    <a href="#home" className="abril-fatface text-base">Fonctionnalitées</a>
                    <a href="#home" className="abril-fatface text-base">Tarifs</a>
                    <a href="#home" className="abril-fatface text-base">Avis</a>
                    <a href="#home" className="abril-fatface text-base">Contact</a>

                </div>
            </nav>
    );
};

export default DesktopMenu;