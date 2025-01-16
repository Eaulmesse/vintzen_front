import React from 'react';
import FeatureCard from './FeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';




const Features = () => {
    return (
        <div id='features' className='bg-gray-50 py-10 shadow-inner relative z-50'>
            <div className='md:w-3/6 w-5/6 max-w-xl m-auto readex-pro'>
                <div className='text-center'>
                    <h2 className='text-4xl text-blue-950 font-bold'>Ce que Vintzen vous offre :</h2>
                    <p className='mt-5 text-gray-600'>Soyez plus rapide, vendez plus</p>
                </div>
            </div>

            <div className='w-[80%] m-auto flex flex-col lg:flex-row'>
                <FeatureCard animdelay={"0.10"}  icon={ <FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faCode}/> } title={"Comptabilité Auto"} description={"Suivez vos finances en temps réel sans effort supplémentaire. Fini les  calculs manuels et les erreurs !"}  />
                <FeatureCard animdelay={"0.20"} icon={ <FontAwesomeIcon className='text-3xl text-blue-600' icon={faClock} /> } title={"Comptabilité Auto"} description={"Suivez vos finances en temps réel sans effort supplémentaire. Fini les  calculs manuels et les erreurs !"}  />
                <FeatureCard animdelay={"0.30"} icon={ <FontAwesomeIcon className='text-3xl text-blue-600' icon={faUser} /> } title={"Comptabilité Auto"} description={"Suivez vos finances en temps réel sans effort supplémentaire. Fini les  calculs manuels et les erreurs !"}  />
            </div>
        </div>
    );
};

export default Features;