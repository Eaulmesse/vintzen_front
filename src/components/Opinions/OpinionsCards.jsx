import React from 'react';
import { motion } from "motion/react"


const OpinionsCards = ({image, title, desc, name, job}) => {
    return (
        <div className='text-center py-10'>
           
            <motion.img initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }} viewport={{ once: true }}  className='w-20 h-20 m-auto rounded-full object-cover shadow-lg ' src={image} alt="Image de l'auteur de la description" />
            <motion.h2 initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }} viewport={{ once: true }} className='text-blue-950 font-bold text-xl mt-5'>{title}</motion.h2>
            <motion.p initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }} className='text-gray-400 mt-2 w-[60%] m-auto'>{desc}</motion.p>
            <motion.p initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }} viewport={{ once: true }} className='text-blue-950 font-bold mt-5'>{name}</motion.p>
            <motion.p initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }} viewport={{ once: true }} className='text-gray-400'>{job}</motion.p>

        </div>
    );
};

export default OpinionsCards;