import React from 'react';
import BlueButton from '../Misc/BlueButton';
import { motion } from "motion/react";

const PricingCard = ({ title, price, featuresNames, features, link }) => {
    return (
            
    
        <div className='w-[90%] md:w-custom-md lg:w-full bg-white m-auto py-5 rounded-[25px] w-full border-2 border-custom-purple shadow-xl my-5'>
            {/* Title */}
            <p  className='m-auto bg-custom-green bg-opacity-20 text-custom-green font-semibold w-fit py-1 px-4 rounded-full' >
                {title}
            </p>

            {/* Price */}
            <div className='w-fit m-auto text-center mt-5'>
                <p className='text-3xl font-semibold text-custom-purple'>{price}</p>
            </div>

            {/* Features */}
            <div className='w-4/5 m-auto mt-5 text-left'>
                <ul className='space-y-3'>
                    {featuresNames.map((featureNames, index) => (
                        <li key={index} className='flex items-center space-x-3 bg-custom-purple bg-opacity-20 rounded-lg p-2 shadow'>
                            <span className='min-w-2 h-8 bg-custom-purple rounded-full mt-1'></span>
                            <div>
                                <p className='text-gray-600 font-semibold text-sm md:text-base'>{featureNames} </p>
                                <p className='text-gray-600 font-regular text-sm'>{features[index]} </p>
                            </div>
                            
                            
                        </li>
                    ))}
                </ul>
            </div>

            {/* Button */}
            <div className='w-4/5 m-auto mt-5'>
                <BlueButton text={"S'inscrire"} link={link} variant={"default"} />
            </div>
            
            {/* Call to Action Button */}
            <motion.div  
                initial={{ opacity: 0, scale: 0.75 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 1, duration: 1 }} 
                viewport={{ once: true }} 
                className='mt-5 w-4/5 m-auto text-center'
            >
                
            </motion.div>
        </div>
    );
};

export default PricingCard;
