import React from 'react';
import PricingCard from './PricingCard';
import { motion } from "framer-motion";

const Pricing = () => {
    const freeFeatures = [
        "Statistiques détaillées : Suivez vos performances de revente.",
        "Comptabilité automatisée : Gagnez du temps avec la gestion automatique.",
        "Alertes personnalisées : Restez informé des opportunités importantes."
    ];

    const betaFeatures = [
        "Comptabilité automatisée : Simplifiez votre gestion quotidienne.",
        "Statistiques détaillées : Accédez à des insights approfondis sur vos ventes."
    ];

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} viewport={{ once: true }} id='prices' className='w-full bg-blue-950 readex-pro py-10'>
            <h1 className='text-white text-4xl font-bold text-center'>Tarifs</h1>
            <p className='text-gray-400 text-center mt-5'>Voici nos plans tarifaires.</p>

            <div className='block lg:flex w-[80%] m-auto'>
                <PricingCard
                    link={"https://dashboard.vintzen.fr/inscription"} // Lien vers la page d'inscription
                    title="Bêta"
                    price="0€/mois" // Assure-toi de mettre un prix ici si nécessaire
                    features={betaFeatures}
                />
            </div>
        </motion.div>
    );
};

export default Pricing;
