import React from 'react';
import NewsCard from './NewsCard';

const News = () => {
    return (
        <div className='w-full readex-pro py-10 bg-blue-950'>
            <h1 className='text-4xl font-bold text-center text-white'>Nos Actualités</h1>
            <p className='text-gray-400 text-center mt-5'>Suivez nos nouveautés & actualités</p>

            <div className='block lg:flex w-[80%] m-auto'>
                <NewsCard title={"Ouverture de la beta"} buttonText={"Rejoindre la bêta"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <NewsCard title={"Nouvelle fonctionnalité"} buttonText={"En savoir plus"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <NewsCard title={"Nouveau design"} buttonText={"Découvrir"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
            </div>
        </div>
    );
};

export default News;