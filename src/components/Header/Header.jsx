import React from 'react';
import BlueButton from '../Misc/BlueButton';
import Preview from '../../assets/images/preview.png';


const Header = () => {
    return (
        <header id='hero' className="text-center readex-pro mt-20">
            <div className='md:w-3/6 w-5/6 max-w-xl m-auto'>
                <h1 className='text-4xl font-bold text-blue-950'>L'Outil ultime pour les revendeurs Vinted !</h1>
                <p className='mt-5 text-gray-600'>Automatisez vos tâches, gagnez du temps, et boostez vos profits</p>

                <div className='mt-10 flex flex-col md:flex-row md:justify-evenly items-center md:space-x-4'>
                    <BlueButton text={'Commencez Maintenant !'} /> 
                    <a className='mt-4 md:mt-0 font-semibold' href="">En savoir plus ! </a>
                </div>

                
                
            </div>
            <div>
                
            </div>
            <img src={Preview} alt="Image de présentation du dashboard Vintzen" className='w-4/5 xl:w-3/5  m-auto  shadow-xl border rounded-lg relative -bottom-6 sm:-bottom-10 z-10'/>
        </header>
    );
};

export default Header;