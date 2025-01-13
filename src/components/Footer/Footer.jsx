import React from 'react';
import logoVintzen from '../../assets/images/logo-vintzen.svg';

const Footer = () => {
    return (
        <footer className="w-full m-auto readex-pro py-10 bg-white flex flex-col lg:flex-row lg:justify-evenly lg:items-center">
            <img className="hidden lg:block w-32" src={logoVintzen} alt="Logo Vintzen" />
            
            <div className="w-full lg:w-auto flex flex-col lg:flex-row lg:items-center text-center space-y-3 lg:space-y-0 lg:space-x-4">
                <a className="md:mx-2" href="#">Accueil</a>
                <a className="md:mx-2" href="#">Fonctionnalités</a>
                <a className="md:mx-2" href="#">Tarifs</a>
                <a className="md:mx-2" href="#">Avis</a>
                <a className="md:mx-2" href="#">Contact</a>
            </div>
            
            <a className="w-fit m-auto bg-blue-100 text-blue-600 font-bold rounded-full text-center mt-5  lg:m-0 px-3 py-1" href="https://status.vintzen.fr/" target="_blank" rel="noopener noreferrer">Etat des serveurs</a>
            <img className="m-auto mt-10 block lg:hidden w-32" src={logoVintzen} alt="Logo Vintzen" />
        </footer>
    );
};

export default Footer;
