import React from 'react';
import BlueButton from '../Misc/BlueButton';
import { motion } from "motion/react"

const NewsCard = ({ title, description, buttonText, link }) => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1 }} viewport={{ once: true }} className="w-[80%] lg:w-[30%] m-auto mt-10 readex-pro text-center flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
            <motion.h3 initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }} viewport={{ once: true }} className='bg-blue-100 text-blue-600 font-bold rounded-full text-center w-full px-1'>{title}</motion.h3>
            <motion.p initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }} className='text-gray-600 mt-5'>{description}</motion.p>
            
            <motion.div initial={{ opacity: 0, translateY: 25 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ delay: 1, duration: 1 }} viewport={{ once: true }} className='mt-5 w-full'>
                <BlueButton href={link} text={buttonText}/>
            </motion.div>
            
        </motion.div>
    );
};

export default NewsCard;
