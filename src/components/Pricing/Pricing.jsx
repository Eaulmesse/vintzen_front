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


        <div className='w-custom md:w-[90%] readex-pro m-auto bg-custom-green/90 grid grid-cols-3 py-10 rounded-xl shadow-inner'>

            <div className='col-span-3 lg:col-span-1 m-auto px-10'>
                <h2 className='text-5xl lg:text-6xl font-bold text-white text-center lg:text-left'>Notre offre <span className='text-custom-purple'>actuelle</span></h2>
            </div>

            <div className='col-span-3 lg:col-span-1'>
                <PricingCard title={"Bêta Tester"} price={"Gratuit"} featuresNames={freeFeaturesNames} features={freeFeatures} link={"#"} />
            </div>

            
            <div className='m-auto col-span-3 lg:col-span-1 px-10'>
                <p className='mt-5 w-full lg:w-[90%] text-white text-lg'>
                    L'outil étant actuellement en <span className='text-custom-purple'>bêta</span>, il vous est <span className='text-custom-purple'>accessible gratuitement ! </span>
                    Si vous souhaitez nous aider, faites nous un maximum de <span className='text-custom-purple'> retour d'experience </span> pour <span className='text-custom-purple'> améliorer notre offre </span> et nos <span className='text-custom-purple'> fonctionalitées. </span>
                </p>

                <p className='text-white font-bold mt-5 w-full lg:w-[90%] text-xl'> <span className='text-custom-purple'> Plusieurs offres </span> seront disponibles selon vos besoins au lancement officiel de la solution.</p>
            </div>

        </div>


        
    );
};

export default Pricing;
