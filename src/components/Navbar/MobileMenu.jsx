import React from 'react';

function MobileMenu() {
    return (
        <>
            <nav className="p-12 bg-blue-950">
                <div className='mt-5 flex flex-col items-center space-y-5 text-white readex-pro'>
                    <a href="#home" className="abril-fatface text-xl">Accueil</a>
                    <a href="#home" className="abril-fatface text-xl">Fonctionnalitées</a>
                    <a href="#home" className="abril-fatface text-xl">Tarifs</a>
                    <a href="#home" className="abril-fatface text-xl">Avis</a>
                    <a href="#home" className="abril-fatface text-xl">Contact</a>


                </div>
                

            </nav>
        </>
    );

}

export default MobileMenu;