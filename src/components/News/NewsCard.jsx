import React from 'react';
import BlueButton from '../Misc/BlueButton';

const NewsCard = ({ title, description, buttonText }) => {
    return (
        <div className="w-[80%] lg:w-[30%] m-auto mt-10 readex-pro text-center flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
            <h3 className='bg-blue-100 text-blue-600 font-bold rounded-full text-center w-full px-1'>{title}</h3>
            <p className='text-gray-600 mt-5'>{description}</p>
            <div className='mt-5 w-full'>
                <BlueButton text={buttonText}/>
            </div>
            
        </div>
    );
};

export default NewsCard;
