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
        <div>
            <h1>Notre offre actuelle</h1>
            <p>Voici nos plans tarifaires.</p>
        </div>
    );
};

export default Pricing;
