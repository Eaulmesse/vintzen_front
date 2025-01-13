import React from 'react';
import logoVintzen from '../../assets/images/logo-vintzen_1.png';

const Footer = () => {
    return (
        <footer className="w-full lg:w-[90%] m-auto readex-pro py-10 bg-white flex flex-col lg:flex-row lg:justify-between">


            
            <img className={`m-auto ml-10 ${"hidden lg:block"}` } src={logoVintzen} alt="" />
            
            
            <div className='w-[50%] m-auto flex flex-col lg:w-auto lg:flex-row lg:items-center lg:mr-10 text-center space-y-3 lg:space-y-0'>
                <a className='md:mx-2' href="">Accueil</a>
                <a className='md:mx-2' href="">Fonctionnalitées</a>
                <a className='md:mx-2' href="">Tarifs</a>
                <a className='md:mx-2' href="">Avis</a>
                <a className='md:mx-2' href="">Contact</a>

                <a className='bg-blue-100 text-blue-600 font-bold rounded-full text-center p-2  lg:ml-5' href="https://status.vintzen.fr/" target='blank'>Etat des serveurs</a>
            </div>

            

            <img className={`m-auto mt-10 ${"block lg:hidden"}` } src={logoVintzen} alt="" />
        </footer>
    );
};

export default Footer;