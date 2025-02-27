import React from 'react';
import FaqQuestion from './FaqQuestion';

const Faq = ({  }) => {

    

    return (
        <div className='mx-auto mt-10 rounded-lg w-custom md:w-custom-md bg-custom-purple bg-opacity-20 border-2 border-dashed border-custom-purple shadow-custom '>
            <h2 className='text-3xl font-bold text-custom-purple text-center'>FAQ</h2>

            <FaqQuestion question="Lorem ipsum dolor sit amet consectetur adipisicing  ?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."/>
            <FaqQuestion question="Lorem ipsum dolor sit amet consectetur adipisicing  ?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."/>
            <FaqQuestion question="Lorem ipsum dolor sit amet consectetur adipisicing  ?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."/>

        </div>
    );
};

export default Faq;