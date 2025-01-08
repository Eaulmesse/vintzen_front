import React from 'react';

import VintzenLogo from '../../assets/images/logo-vintzen_1.png';

const DesktopMenu = () => {
    return (
        <nav className="w-full flex">
                <img src={VintzenLogo} className='absolute top-5 left-24' alt="" />
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