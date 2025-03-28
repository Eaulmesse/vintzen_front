import React from 'react';
import { motion } from 'framer-motion';

import FeatureCard from './FeatureCard';
import PreviewContent from '../../assets/images/preview.png';
import PreviewStats from '../../assets/images/preview-stats.png';
import FilterPreview from '../../assets/images/filter-preview.png';

const Features = () => {
  const featuresNames = [
    "Statistiques détaillées :",
    "Bot Vinted 0 délais",
    "Comptabilité automatisée :"
  ];

  const features = [
    "Suivez vos performances de revente (articles vendus, revenus, etc.) avec des graphiques clairs.",
    "Soyez le premier à être informé des affaires les plus intéressantes selon vos critères.",
    "Gagnez du temps et du profit avec la gestion automatique de votre comptabilité."
  ];

  const previewsArray = [
    { src: PreviewStats, isSmall: false },
    { src: FilterPreview, isSmall: true },
    { src: PreviewContent, isSmall: false }
  ];

  return (
    <div id='features' className='my-10'>
      <h2 className='text-3xl mt-5 font-bold text-custom-purple text-center'>Découvrez les fonctionnalitées de Vintzen</h2>

      {featuresNames.map((featureName, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.25 }}
          viewport={{ once: true }}
        >
          <FeatureCard
            title={featureName}
            description={features[index]}
            preview={previewsArray[index].src}
            isSmall={previewsArray[index].isSmall}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Features;