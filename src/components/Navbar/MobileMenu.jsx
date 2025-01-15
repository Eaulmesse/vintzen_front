import React from 'react';


function MobileMenu() {
    return (
        <>
            <nav className="h-96 bg-blue-950 flex items-center justify-center mt-17">
                
                <div className='flex flex-col items-center justify-center space-y-5 text-white readex-pro'>
                
                    <a href="#hero" className="abril-fatface text-base">Accueil</a>
                    <a href="#features" className="abril-fatface text-base">Fonctionnalitées</a>
                    <a href="#prices" className="abril-fatface text-base">Tarifs</a>
                    <a href="#opinions" className="abril-fatface text-base">Avis</a>
                    <a href="#news" className="abril-fatface text-base">Actualitées</a>
                    <a href="#footer" className="abril-fatface text-base">Contact</a>
                </div>
            </nav>
        </>
    );

}

export default MobileMenu;