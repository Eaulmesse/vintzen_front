import React from 'react';
import FeatureCard from './FeatureCard';

import PreviewContent from '../../assets/images/preview.png';
import PreviewStats from '../../assets/images/preview-stats.png';
import PreviewBot from '../../assets/images/preview-bot.png';
import ArticlePreview from '../../assets/images/article-preview.png';
import FilterPreview from '../../assets/images/filter-preview.png';

const Features = () => {
  const featuresNames = [
    "Statistiques détaillées :",
    "Algorithme de recherche d'articles personnalisé et ultra-réactif :",
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
    <div>
      {featuresNames.map((featureName, index) => (
        <FeatureCard
          key={index}
          title={featureName}
          description={features[index]}
          preview={previewsArray[index].src}
          isSmall={previewsArray[index].isSmall}
        />
      ))}
    </div>
  );
};

export default Features;