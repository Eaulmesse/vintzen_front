import React from 'react';
import PricingCard from './PricingCard';
import { motion } from "framer-motion";

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div 
            className='w-custom md:w-[90%] readex-pro m-auto bg-custom-green/90 py-10 px-4 md:px-8 2xl:px-32 rounded-xl shadow-inner'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Structure en 3 rangées pour mobile et en rangée unique pour grand écran */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 xl:gap-8'>
                {/* Partie gauche - texte descriptif */}
                <motion.div 
                    className='w-full lg:w-1/3 order-3 '
                    variants={itemVariants}
                >
                    <p className='mt-5  text-white text-lg 2xl:text-2xl text-center lg:text-justify'>
                        L'outil étant actuellement en <span className='text-custom-purple'>bêta</span>, il vous est <span className='text-custom-purple'>accessible gratuitement ! </span>
                        Si vous souhaitez nous aider, faites nous un maximum de <span className='text-custom-purple'> retour d'experience </span> pour <span className='text-custom-purple'> améliorer notre offre </span> et nos <span className='text-custom-purple'> fonctionalitées. </span>
                    </p>

                    <p className='text-white font-bold mt-5 text-xl 2xl:text-2xl text-center lg:text-justify '>
                        <span className='text-custom-purple'> Plusieurs offres </span> seront disponibles selon vos besoins au lancement officiel de la solution.
                    </p>
                </motion.div>

                {/* Partie centrale - la carte de prix (toujours centrée) */}
                <motion.div 
                    className='w-full lg:w-1/3 order-2 flex justify-center'
                    variants={itemVariants}
                >
                    <PricingCard 
                        title={"Bêta Tester"} 
                        price={"Gratuit"} 
                        featuresNames={freeFeaturesNames} 
                        features={freeFeatures} 
                        link={"#"} 
                    />
                </motion.div>

                {/* Partie droite - titre accrocheur */}
                <motion.div 
                    className='w-full lg:w-1/3 order-1'
                    variants={itemVariants}
                >
                    <h2 className='text-5xl xl:text-6xl 2xl:text-8xl font-bold text-white text-center lg:text-left drop-shadow w-fit '>
                        Notre offre <span className='text-custom-purple'>actuelle</span>
                    </h2>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Pricing;