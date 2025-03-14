import React from 'react';
import BlueButton from '../Misc/BlueButton';
import Preview from '../../assets/images/preview.png';
import { motion } from "motion/react"
import clientExemple from '../../assets/images/client-exemple.jpg';

const Header = () => {

    
    return (
        <motion.header id='hero' className="text-center readex-pro bg-opacity-10 bg-indigo-400 overflow-hidden">
            <div className='w-custom max-w-xl m-auto'>
                <motion.div initial={{ opacity: 0, translateY: -100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5, duration: 1 }} className='mt-32 flex flex-col lg:flex-row items-center justify-center space-x-2'>
                    <div className='flex justify-center'>
                        <motion.img initial={{ opacity: 0, translateY: -100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5, duration: 1 }} className='w-5 h-5 rounded-full' src={clientExemple} alt="" />
                        <motion.img initial={{ opacity: 0, translateY: -100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.6, duration: 1 }} className='w-5 h-5 rounded-full -ml-1' src={clientExemple} alt="" />
                        <motion.img initial={{ opacity: 0, translateY: -100 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.7, duration: 1 }} className='w-5 h-5 rounded-full -ml-1' src={clientExemple} alt="" />
                    </div>
                    <p className='text-sm'>Plusieurs communautées supportent déjà notre projet !</p>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.75 }} className='text-4xl/[50px] font-bold mt-5'><span className='text-custom-purple bg-custom-purple bg-opacity-20 px-3 py-1 border-[3px] border-custom-purple border-dashed rounded-lg text-6xl/[80px] '>Le SaaS Ultime</span> pour les vendeurs <span className='text-custom-purple underline decoration-2'>Vinted !</span></motion.h1>
                <motion.p initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.25 ,duration: 0.75 }} className='mt-5 text-gray-600'><span className='text-custom-purple'>Automatisez </span>vos tâches, <span className='text-custom-purple'>gagnez</span>  du temps, et <span className='text-custom-purple'>boostez</span> vos profits</motion.p>

                <motion.div initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.25 ,duration: 1 }} className='mt-10 flex flex-col md:flex-row md:justify-evenly items-center md:space-x-4'>
                    <BlueButton href={'#prices'} text={'Commencez Maintenant !'} /> 
                    <motion.a className='mt-4 md:mt-0 font-semibold text-custom-purple hover:text-indigo-500 hover:text-lg transition-all' href="#features">En savoir plus ! </motion.a>
                </motion.div>

                
                
            </div>
            
            
            <motion.img initial={{ opacity: 0, translateY: 500 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} src={Preview} alt="Image de présentation du dashboard Vintzen" className='w-4/5 xl:w-3/5  m-auto  shadow-xl border rounded-lg relative -bottom-6 sm:-bottom-10'/>
        </motion.header>
    );
};

export default Header;