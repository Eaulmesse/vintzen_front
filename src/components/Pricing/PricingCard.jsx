import React from 'react';
import BlueButton from '../Misc/BlueButton';
import { motion } from "motion/react"


const PricingCard = ({ title, price, features, link }) => {
    return (
        <div className='bg-white w-4/5 lg:w-[30%] m-auto mt-10 py-5 rounded-lg'>
            <motion.p initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 , duration: 1 }} viewport={{ once: true }} className='m-auto bg-blue-100 text-blue-600 font-semibold  w-fit py-1 px-4 rounded-full'>{title}</motion.p>

            <motion.div  initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.40 , duration: 1 }} viewport={{ once: true }} className='w-fit m-auto text-center mt-5'>
                <p className='text-3xl font-semibold '>{price}</p>
                <p className='text-gray-600'>Par mois</p>
            </motion.div>

            <motion.p  initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.50 , duration: 1 }} viewport={{ once: true }} className='w-4/5 m-auto mt-5 text-center text-gray-600'>
                {features}
            </motion.p>

            <motion.div  initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1 , duration: 1 }} viewport={{ once: true }} className='mt-5 w-4/5 m-auto text-center'>
                {/* Changer le href par le lien stripe */}
                <BlueButton href={link} text={"Choisir cet abonnement"}/>
            </motion.div>
            
        </div>
    );
};



export default PricingCard;