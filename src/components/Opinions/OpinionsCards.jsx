import React from 'react';
import { motion } from "motion/react"


const OpinionsCards = ({ thumbnail, name, offerChoosen, opinion }) => {
    return (
        <div className="bg-custom-purple-secondary/40 border-2 border-dashed border-custom-purple rounded-2xl readex-pro text-white py-5 w-[500px] flex-shrink-0 shadow-custom">

            <div className='ml-5 flex space-x-2 text-custom-purple'>
                <img src={thumbnail} className='w-12 h-12 object-cover rounded-lg shadow-lg'/>
                <div>
                    <p className='text-lg font-semibold'>{name}</p>
                    <p>{offerChoosen}</p>
                </div>
                
                
            </div>
           
           <p className='w-5/6 ml-5 mt-5 text-custom-purple'>{opinion}</p>
            
        </div>
    );
};

export default OpinionsCards;