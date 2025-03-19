import React from 'react';
import { motion } from 'framer-motion';

import FaqQuestion from './FaqQuestion';

const Faq = ({  }) => {

    

    return (
        <motion.div id='faq' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} viewport={{ once: true }} className='mx-auto mt-10 rounded-lg w-custom md:w-[50%] bg-custom-purple bg-opacity-20 border-2 border-dashed border-custom-purple shadow-custom readex-pro'>
            <h2 className='text-3xl mt-5 font-bold text-custom-purple text-center'>FAQ</h2>

            <div className='mt-10'>
                <FaqQuestion question="Comment le bot sans délai peut-il m’aider à booster mes ventes ?" answer="Le bot 0 délai booste vos ventes en scrappant Vinted en temps réel selon vos filtres personnalisés (prix, taille, marque, etc.). Il analyse instantanément des milliers d’annonces pour repérer les articles les plus intéressants – ceux avec le meilleur potentiel de revente ou les tendances du moment – et vous les livre en un clin d’œil. Cette réactivité vous permet de saisir les opportunités avant vos concurrents, d’optimiser vos achats ou annonces, et d’augmenter vos profits rapidement. Avec notre bot ultra-rapide, vous transformez les données de Vinted en avantage concurrentiel !

"/>
                <FaqQuestion question="Comment puis-je suivre mes revenus et dépenses dans la section comptabilité ?" answer="Dans la section comptabilité de notre SaaS, vous pouvez suivre vos revenus et dépenses en toute simplicité grâce à un tableau de bord intuitif. Connectez vos transactions Vinted pour voir automatiquement vos gains par vente, vos frais de plateforme et vos coûts annexes (expédition, packaging, etc.). Des rapports détaillés, mis à jour en temps réel, vous permettent d’analyser vos performances financières sur une période donnée. Exportez facilement vos données pour votre gestion ou déclarations fiscales. Avec cet outil, gardez un contrôle total sur votre budget et optimisez votre rentabilité sur Vinted !

"/>
                <FaqQuestion question="Comment fonctionne la gestion des stocks synchronisée avec Vinted" answer="La fonction de gestion des stocks de notre SaaS, synchronisée avec Vinted, vous permet de suivre vos articles achetés et vendus sur un mois précis avec une grande simplicité. Connectée à votre compte Vinted, elle met à jour vos données automatiquement toutes les 2 heures ou dès que vous cliquez sur le bouton 'synchroniser'. Vous accédez alors à un inventaire détaillé via un tableau de bord clair, où vous pouvez filtrer par mois pour analyser vos transactions, suivre vos stocks et calculer vos bénéfices. Cet outil pratique vous aide à organiser votre activité et à optimiser vos performances sur Vinted sans effort !

"/>
            </div>
            

            <p className='w-5/6 m-auto text-center text-custom-purple text-md mt-10 mb-5'>Si vous avez d’autres questions, n’hesitez pas à venir les poser sur notre <a href='https://discord.gg/4uj8v9YU' target='_blank' rel='noreferrer' className='text-lg font-bold'>Discord</a> </p>
        </motion.div>
    );
};

export default Faq;