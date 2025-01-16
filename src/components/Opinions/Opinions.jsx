import React from 'react';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';


const Opinions = () => {
    return (
        <div  id='opinions' className='w-full readex-pro py-10 readex-pro'>
            <h1 className='text-4xl font-bold text-center text-blue-950'>Avis de nos utilisateurs</h1>
            <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

            <div className='block lg:flex w-[80%] m-auto mt-10'>
                <OpinionsCards image={clientExemple} title={`"Mon chiffre d'affaire a doublé"`} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} name={"Jean File"} job={"Roi du Gabon"} />
                <OpinionsCards image={clientExemple} title={`"Ma vie a changée"`} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} name={"Le fils de Greg"} job={"Prince de Gregie"} />
            </div>
        </div>
    );
};

export default Opinions;