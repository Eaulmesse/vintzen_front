import React from 'react';
import { motion } from 'framer-motion';

import FaqQuestion from './FaqQuestion';

const Faq = ({  }) => {

    

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} viewport={{ once: true }} className='mx-auto mt-10 rounded-lg w-custom md:w-[50%] bg-custom-purple bg-opacity-20 border-2 border-dashed border-custom-purple shadow-custom readex-pro'>
            <h2 className='text-3xl mt-5 font-bold text-custom-purple text-center'>FAQ</h2>

            <div className='mt-10'>
                <FaqQuestion question="Lorem ipsum dolor sit amet consectetur adipisicing  ?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."/>
                <FaqQuestion question="Lorem ipsum dolor sit amet consectetur adipisicing  ?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."/>
                <FaqQuestion question="Lorem ipsum dolor sit amet consectetur adipisicing  ?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."/>
            </div>
            

            <p className='w-5/6 m-auto text-center text-custom-purple text-md mt-10 mb-5'>Si vous avez d’autres questions, n’hesitez pas à venir les poser sur notre <a href='https://discord.gg/4uj8v9YU' target='_blank' rel='noreferrer' className='text-lg font-bold'>Discord</a> </p>
        </motion.div>
    );
};

export default Faq;