import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bell, ArrowRight } from 'lucide-react';

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true); 
    const news = [
        { title: "Ouverture de la beta", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", date: "12 Mars 2025", category: "Nouveau", link: "https://www.google.com" },
        { title: "Autre news", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", date: "10 Février 2025", category: "Bêta", link: "https://www.google.com"    },
        { title: "Troisième news", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", date: "21 Janvier 2024", category: "Information", link: "https://www.google.com" },
        
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
        <div id="news" className='w-custom md:w-custom-md readex-pro py-10 bg-custom-purple m-auto mt-10 rounded-lg shadow-custom'>
            
            <h1 className='text-4xl font-bold text-white text-center'>Nouveautés</h1>
            <p className='text-white/80 text-center'>Découvrez nos dernières fonctionnalités</p>

            <div 
                className="relative h-[300px]  md:h-[280px]"
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
        </div>
    );
};

export default News;