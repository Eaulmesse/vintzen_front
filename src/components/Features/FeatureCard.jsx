import React from 'react';
import { motion } from "motion/react"


const FeatureCard = ({ title, description, icon, animdelay }) => {

    let itemsDelay = animdelay * 3;

    return (
        <motion.div initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: animdelay, duration: 1 }} viewport={{ once: true }} className="w-4/5 lg:w-[30%] m-auto lg:space-x-4 mt-10 readex-pro lg:text-left text-center flex flex-col items-center lg:items-start bg-white shadow-lg p-4 rounded-lg">
            <motion.div initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: itemsDelay , duration: 1 }} viewport={{ once: true }} className="md:ml-4 my-5">
                {icon}
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: itemsDelay , duration: 1 }} viewport={{ once: true }} className="w-5/6 m-auto my-5">
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-600 mt-5'>{description}</p>
            </motion.div>
        </motion.div>
    );
};

export default FeatureCard;