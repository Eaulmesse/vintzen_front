import React from 'react';
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon, contentColor, bgColor, content, contentAlt, animdelay, isComingSoon }) => {
    const itemsDelay = animdelay * 3;

    return (
      <div className={`w-4/5  m-auto ${bgColor} ${contentColor} p-5 rounded-lg shadow-md readex-pro my-5 relative overflow-hidden`}>
        <div className="relative z-30 lg:flex lg:items-center">
          <div className='lg:w-3/5'>
            <p className='text-3xl z-30'>{title}</p>
            <p className='text-sm z-30'>{description}</p>
          </div>
          
          <div className='mt-5 z-30 lg:w-2/5 lg:mt-0'>
            <img className='rounded-lg shadow-lg' src={content} alt={contentAlt} />
          </div>
        </div>

        <div className='absolute top-0 right-[-50px] lg:left-60 lg:top-20'>
          {icon} 
        </div>
        {isComingSoon && <p className="absolute bottom-2 right-2 z-30">Coming Soon</p>}
      </div>
    );
};

export default FeatureCard;
