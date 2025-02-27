import React from 'react';
import PricingCard from './PricingCard';
import { motion } from "framer-motion";
import { div } from 'motion/react-client';

const Pricing = () => {
    const freeFeaturesNames = [
        "Statistiques détaillées :",
        "Comptabilité automatisée :",
        "Alertes personnalisées :"
    ];

    const freeFeatures = [
        "Suivez vos performances de revente.",
        "Gagnez du temps avec la gestion automatique.",
        "Restez informé des opportunités importantes."
    ];



    return (
        <div className='w-custom md:w-custom-md readex-pro p-5 md:p-10 m-auto bg-custom-green rounded-xl shadow-custom flex flex-col lg:flex-row gap-2'>
            <div className='w-full lg:w-1/2 h-full lg:m-auto flex flex-col justify-between'>   
                <h2 className='text-3xl lg:text-5xl font-bold text-white text-center lg:text-left'>Notre offre <span className='text-custom-purple'>actuelle</span></h2>

                <p className='mt-5 w-full lg:w-[90%] text-white'>
                    L'outil étant actuellement en <span className='text-custom-purple'>bêta</span>, il vous est <span className='text-custom-purple'>accessible gratuitement ! </span>
                    Si vous souhaitez nous aider, faites nous un maximum de <span className='text-custom-purple'> retour d'experience </span> pour <span className='text-custom-purple'> améliorer notre offre </span> et nos <span className='text-custom-purple'> fonctionalitées. </span>
                </p>

                <p className='text-white font-bold mt-5 w-full lg:w-[90%]'> <span className='text-custom-purple'> Plusieurs offres </span> seront disponibles selon vos besoins au lancement officiel de la solution.</p>
            </div>
            
            <div className='w-full lg:w-1/2 m-auto lg:m-0 mt-10'>
                <PricingCard title={"Bêta Tester"} price={"Gratuit"} featuresNames={freeFeaturesNames} features={freeFeatures} link={"#"} />
            </div>
            
            
        </div>
    );
};

export default Pricing;
