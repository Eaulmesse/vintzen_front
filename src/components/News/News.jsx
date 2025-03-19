import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bell, ArrowRight } from 'lucide-react';

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true); 
    const news = [
        { title: "Ouverture de la beta", description: "Notre outil est en bêta gratuite ! Testez ses fonctionnalités (gestion des stocks, comptabilité, bot de scraping) sans frais et aidez-nous à l’améliorer avec vos retours avant le lancement officiel. Profitez-en dès maintenant !", date: "19 Mars 2025", category: "Bêta",  },
        { title: "Développement du bot 0 délais", description: "Le bot 0 délai est actuellement en cours de développement. Conçu pour scraper Vinted selon vos filtres et repérer les articles les plus intéressants ultra-rapidement, il sera bientôt disponible pour booster vos performances. Restez à l’affût !", date: "10 Mars 2025", category: "Développement"},
        
    ];

    // Défilement automatique
    useEffect(() => {
        let interval;
        if (autoPlay) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % news.length);
            }, 5000); 
        }
        return () => clearInterval(interval);
    }, [autoPlay, news.length]);

    
    const handleMouseEnter = () => setAutoPlay(false);
    const handleMouseLeave = () => setAutoPlay(true);

    

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} viewport={{ once: true }} id="news" className='w-custom md:w-[50%] readex-pro py-10 bg-custom-purple/90 m-auto mt-10 rounded-lg shadow-inner'>
            
            <h1 className='text-4xl font-bold text-white text-center'>Nouveautés</h1>
            <p className='text-white/80 text-center'>Découvrez nos dernières fonctionnalités</p>

            <div 
                className="relative h-[300px]  "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative w-custom flex m-auto">
                    <AnimatePresence>
                        {news.map((item, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                    }}
                                    style={{ position: 'absolute', width: '100%', top: '50px' }}
                                >
                                    <NewsCard {...item} />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            
            <div className="flex justify-center gap-2 ">
                {news.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentIndex ? 'bg-white w-6' : 'bg-white/30'
                        }`}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default News;