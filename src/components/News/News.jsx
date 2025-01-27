import React from 'react';
import NewsCard from './NewsCard';
import { motion } from "motion/react"

const News = () => {
    return (
        <motion.div initial={{ opacity: 0,  }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} viewport={{ once: true }} id="news" className='w-full readex-pro py-10 bg-blue-950'>
            <h1 className='text-4xl font-bold text-center text-white'>Nos Actualitées</h1>
            <p className='text-gray-400 text-center mt-5'>Suivez nos nouveautés & actualités</p>

            <div className='block lg:flex w-[80%] m-auto'>

                {/* Changer le link par le lien vers lequel redigirer */}
                <NewsCard link={""} title={"Ouverture de la beta"} buttonText={"Rejoindre la bêta"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <NewsCard link={""} title={"Nouvelle fonctionnalité"} buttonText={"En savoir plus"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <NewsCard link={""} title={"Nouveau design"} buttonText={"Découvrir"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
            </div>
        </motion.div>
    );
};

export default News;