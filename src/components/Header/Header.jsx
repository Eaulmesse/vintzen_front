import React from 'react';
import BlueButton from '../Misc/BlueButton';
import Preview from '../../assets/images/preview.png';
import { motion } from "motion/react"


const Header = () => {

    
    return (
        <motion.header  id='hero' className="text-center readex-pro mt-20">
            <div className='md:w-3/6 w-5/6 max-w-xl m-auto'>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 1 }} className='text-4xl font-bold text-blue-950'>L'Outil ultime pour les revendeurs Vinted !</motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 1 }} className='mt-5 text-gray-600'>Automatisez vos tâches, gagnez du temps, et boostez vos profits</motion.p>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.25, duration: 2 }} className='mt-10 flex flex-col md:flex-row md:justify-evenly items-center md:space-x-4'>
                    <BlueButton href={'#prices'} text={'Commencez Maintenant !'} /> 
                    <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2 }} className='mt-4 md:mt-0 font-semibold hover:text-blue-600 hover:text-lg transition-all' href="#features">En savoir plus ! </motion.a>
                </motion.div>

                
                
            </div>
            <div>
                
            </div>
            <motion.img initial={{ opacity: 0, translateY: 500 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5, duration: 1.5 }} src={Preview} alt="Image de présentation du dashboard Vintzen" className='w-4/5 xl:w-3/5  m-auto  shadow-xl border rounded-lg relative -bottom-6 sm:-bottom-10 z-10'/>
        </motion.header>
    );
};

export default Header;