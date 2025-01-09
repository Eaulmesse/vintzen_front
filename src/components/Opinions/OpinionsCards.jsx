import React from 'react';

const OpinionsCards = ({image, title, desc, name, job}) => {
    return (
        <div className='text-center py-10'>
           
            <img className='w-20 h-20 m-auto rounded-full object-cover shadow-lg ' src={image} alt="Image de l'auteur de la description" />
            <h2 className='text-blue-950 font-bold text-xl mt-5'>{title}</h2>
            <p className='text-gray-400 mt-2 w-[60%] m-auto'>{desc}</p>
            <p className='text-blue-950 font-bold mt-5'>{name}</p>
            <p className='text-gray-400'>{job}</p>

        </div>
    );
};

export default OpinionsCards;