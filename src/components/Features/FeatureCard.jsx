import React from 'react';
import { motion } from "motion/react";

const FeatureCard = ({ title, description, icon, animdelay, isComingSoon }) => {
    const itemsDelay = animdelay * 3;

    return (
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: animdelay, duration: 1 }}
          viewport={{ once: true }}
          className={`w-4/5 lg:w-[30%] m-auto mt-10 readex-pro bg-white shadow-lg p-4 rounded-lg 
            flex flex-col items-center lg:items-start transition-all 
            ${isComingSoon ? 'opacity-50 blur-sm hover:blur-none hover:opacity-100' : ''}`}
          style={{ minHeight: '16rem' }} // Assure une hauteur minimale identique
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: itemsDelay, duration: 1 }}
            viewport={{ once: true }}
            className="md:ml-4 my-5"
          >
            {icon}
          </motion.div>
      
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: itemsDelay, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between flex-grow w-5/6 m-auto my-5"
          >
            <h3 className="font-bold text-lg lg:text-xl">{title}</h3>
            <p className="text-gray-600 mt-5 text-sm lg:text-base">{description}</p>
            {isComingSoon && (
              <p className="text-sm text-orange-500 font-semibold mt-3">
                À venir 🚀
              </p>
            )}
          </motion.div>
        </motion.div>
      );
};

export default FeatureCard;
