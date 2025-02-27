import React, { useState } from 'react';
import { ChevronRight, ChevronDown} from 'lucide-react'

const FaqQuestion = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='mx-auto my-5 rounded-lg w-custom-indiv bg-custom-purple readex-pro p-5 border-custom-purple shadow-custom text-white' onClick={() => setIsOpen(!isOpen)}>
            <div className='flex justify-between w-full'>
                <p className='text-xl'>{question}</p>
                {isOpen ? (
                    <ChevronDown size={30} color='#FFF'/>
                ) : (
                    <ChevronRight size={30} color='#FFF'/>
                )}
                

            </div>
            
            {isOpen && (
                <p className='text-sm mt-5'>{answer}</p>
            )}
        </div>
    );
};

export default FaqQuestion;
