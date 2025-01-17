import React from 'react';
import PricingCard from './PricingCard';
import { motion } from "motion/react"

const Pricing = () => {

    const freeFeatures = [
        "Statistiques détaillées : Suivez vos performances de revente.",
        "Comptabilité automatisée : Gagnez du temps avec la gestion automatique.",
        "Alertes personnalisées : Restez informé des opportunités importantes."
    ];
    return (
        <motion.div initial={{ opacity: 0,  }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} viewport={{ once: true }} id='prices' className='w-full bg-blue-950 readex-pro py-10'>
            <h1 className='text-white text-4xl font-bold text-center'>Pricing</h1>
            <p className='text-gray-400 text-center mt-5'>Here you can find our pricing plans.</p>

            <div className='block lg:flex w-[80%] m-auto'>
                {/* Changer les liens link par le lien de paiement stripe */}
                {/* Gratuit */}
                <PricingCard
                    link={"#"}
                    title="Gratuit"
                    price="0€"
                    features={freeFeatures}
                />
            </div>
        </motion.div>
    );
};
// 
export default Pricing;