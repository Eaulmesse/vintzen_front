import React from 'react';


function MobileMenu() {
    return (
        <>
            <nav className="h-96 bg-blue-950 flex items-center justify-center mt-17">
                
                <div className='flex flex-col items-center justify-center space-y-5 text-white readex-pro'>
                
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