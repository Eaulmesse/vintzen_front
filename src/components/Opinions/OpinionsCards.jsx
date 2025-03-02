import React from 'react';
import { motion } from "motion/react"


const OpinionsCards = ({ thumbnail, name, offerChoosen, opinion, width}) => {
    return (
        <div className={`bg-custom-purple/90 rounded-2xl readex-pro text-white py-5 ${width} h-full shadow-custom`}>

            <div className='w-5/6 ml-5 flex space-x-2'>
                <img src={thumbnail} className='w-12 h-12 object-cover rounded-lg shadow-lg'/>
                <div>
                    <p className='text-lg font-semibold'>{name}</p>
                    <p>{offerChoosen}</p>
                </div>
                
                
            </div>
           
           <p className='w-5/6 ml-5 mt-5'>{opinion}</p>
            
        </div>
    );
};

export default OpinionsCards;