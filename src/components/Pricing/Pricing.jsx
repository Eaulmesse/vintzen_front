import React from 'react';
import PricingCard from './PricingCard';
import { motion } from "framer-motion";
import { div } from 'motion/react-client';

const Pricing = () => {
    const freeFeatures = [
        "Statistiques détaillées : Suivez vos performances de revente.",
        "Comptabilité automatisée : Gagnez du temps avec la gestion automatique.",
        "Alertes personnalisées : Restez informé des opportunités importantes."
    ];


    return (
        <div className='w-custom readex-pro p-10 m-auto bg-custom-green rounded-xl shadow-custom flex flex-col lg:flex-row gap-2'>
            <div className='w-full lg:w-1/2 h-full lg:m-auto flex flex-col justify-between'>   
                <h2 className='text-5xl font-bold text-white'>Notre offre <span className='text-custom-purple'>actuelle</span></h2>

                <p className='mt-5 w-full lg:w-4/5 text-white'>
                    L'outil étant actuellement en <span className='text-custom-purple'>bêta</span>, il vous est <span className='text-custom-purple'>accessible gratuitement ! </span>
                    Si vous souhaitez nous aider, faites nous un maximum de <span className='text-custom-purple'> retour d'experience </span> pour <span className='text-custom-purple'> améliorer notre offre </span> et nos <span className='text-custom-purple'> fonctionalitées. </span>
                </p>

                <p className='text-white font-bold mt-5 w-full lg:w-4/5'> <span className='text-custom-purple'> Plusieurs offres </span> seront disponibles selon vos besoins au lancement officiel de la solution.</p>
            </div>
            
            <div className='w-full lg:w-1/2 m-auto lg:m-0 mt-10'>
                <PricingCard title={"Bêta Tester"} price={"Gratuit"} features={freeFeatures} link={"#"} />
            </div>
            
            
        </div>
    );
};

export default Pricing;
