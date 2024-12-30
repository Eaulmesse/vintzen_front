import React from 'react';
import StartButton from '../Misc/StartButton';


const Header = () => {
    return (
        <header className="text-center readex-pro mt-20">
            <div className='md:w-3/6 w-5/6 m-auto'>
                <h1 className='text-4xl font-bold text-blue-950'>L'Outil ultime pour les revendeurs Vinted !</h1>
                <p className='mt-5'>Automatisez vos tâches, gagnez du temps, et boostez vos profits</p>

                <div className='mt-10 flex flex-col md:flex-row md:justify-center  items-center md:space-x-4'>
                    <StartButton /> 
                    <a className='mt-4 md:mt-0' href="">En savoir plus</a>
                </div>
                
            </div>
            
        </header>
    );
};

export default Header;