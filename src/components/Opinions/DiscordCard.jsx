import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import discord from '../../assets/images/discord-logo.png'

const DiscordCard = ({ thumbnail, title, link, text, width }) => {
    return (
        <motion.div 
            className={`bg-[#7289da] rounded-2xl readex-pro text-white py-5 ${width} h-full cursor-pointer relative shadow-custom`}
            onClick={() => window.open('https://discord.gg/Wdhy2EA3', '_blank')}
        >
            <div className='md:flex space-x-2 w-5/6 m-auto md:ml-5 text-center md:text-left'>
                <img src={discord} alt="Discord" className='w-12 h-12 object-cover rounded-lg shadow-lg m-auto md:m-0'/>
                <div>
                    <p className='w-5/6 m-auto md:m-0 lg:text-lg font-semibold'>{title}</p>
                    <p className='w-5/6 text-xs'>{link}</p>
                </div>
            </div>

            <div className='flex mt-5 ml-5 flex self-end items-center'>
                <p className='text-lg w-full '>{text}</p>
                <ChevronRight  size={40} color='white'/>
            </div>
            

        </motion.div>
    );
};

export default DiscordCard;
