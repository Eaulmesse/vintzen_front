import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const BlueButton = ({ text, href, variant = 'default' }) => {

    const variantsColor = {
        default: 'bg-custom-green hover:bg-custom-green-cta',
        primary: 'bg-custom-purple hover:bg-custom-purple-cta',
        secondary: 'bg-gray-500 hover:bg-gray-600',
    };

    const buttonVariants = {
        initial: {
            scale: 1
        },
        hover: {
            scale: 1.05,
            rotate: '-1deg'
        }
    };

    const sparklesVariants = {
        
        hover: {
            rotate: '90deg'
        }
    };

    

    return (
        <motion.div 
            className={`${variantsColor[variant]} text-white h-16 px-5 rounded-md flex justify-center items-center shadow-lg cursor-pointer  space-x-2`} 
            variants={buttonVariants} 
            initial="initial"
            whileHover="hover"
        >
            <motion.div variants={sparklesVariants}>
                <Sparkles size={26}/>
            </motion.div>
            
            <motion.a 
                href={href} 
                className='text-md lg:text-lg font-semibold' 
            >
                {text}
            </motion.a> 
        </motion.div>
    );
};

export default BlueButton;