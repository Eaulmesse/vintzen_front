import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import discord from '../../assets/images/discord-logo.png'

const DiscordCard = ({ thumbnail, title, link, text, width }) => {
    return (
        <motion.div 
            
            className={`bg-[#7289da] rounded-2xl readex-pro text-white py-5 ${width} h-full border-4 border-white cursor-pointer relative`}
            onClick={() => window.open('https://discord.gg/Wdhy2EA3', '_blank')}
        >
            <div className='w-5/6 ml-5 flex space-x-2'>
                <img src={discord} alt="Discord" className='w-12 h-12 object-cover rounded-lg shadow-lg'/>
                <div>
                    <p className='text-lg font-semibold'>{title}</p>
                    <p>{link}</p>
                </div>
            </div>

            <div className='flex ml-5 flex h-fit  items-center absolute bottom-2'>
                <p className='text-lg w-full'>
                    {text} 
                    
                </p>
                <ChevronRight  size={40} color='white'/>
            </div>
            

        </motion.div>
    );
};

export default DiscordCard;
