import React from 'react';
import logoVintzen from '../../assets/images/logo-vintzen.svg';
import discord from '../../assets/images/discord-logo.png'
const Footer = () => {
    return (
        <footer id='footer' className="w-custom rounded-2xl border-2 border-dashed border-custom-purple m-auto readex-pro p-5 mt-10 mb-1 bg-custom-purple/20 flex flex-col md:flex-row justify-between">

            <div >   
                <img className="w-32 m-auto md:m-0" src={logoVintzen} alt="Logo Vintzen" />
                <p className='text-center md:text-left'>l'outil de revente Vinted par excellence</p>

                <div className='flex flex-col md:flex-row gap-2 mt-5'>
                    <img className='w-20 rounded-lg m-auto md:m-0' src={discord} alt="Discord" />
                    <div className='md:self-end text-center md:text-left'>
                        <p>Rejoignez notre communauté sur Discord !</p>
                        <a href="https://discord.gg/vintzen" target="_blank" rel="noopener noreferrer">https://discord.gg/Wdhy2EA3</a>
                    </div>
                    
                </div>
            </div>
            
            
            <div className="w-full lg:w-auto flex flex-col justify-evenly text-center md:text-right space-y-3 lg:space-y-0 lg:space-x-4 mt-5 md:mt-0">
                <a className="md:mx-2" href="#">Accueil</a>
                <a className="md:mx-2" href="#">Fonctionnalités</a>
                <a className="md:mx-2" href="#">Tarifs</a>
                <a className="md:mx-2" href="#">Avis</a>
                <a className="md:mx-2" href="#">Contact</a>
            </div>

        </footer>
    );
};

export default Footer;
