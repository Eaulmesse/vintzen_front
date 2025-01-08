import React from 'react';

const BlueButton = ({ text }) => {
    return (
        <div className='bg-blue-600 text-white h-16 px-5 rounded-md flex justify-center items-center shadow-lg cursor-pointer'>
            <a href='#' className='text-lg'>{text}</a>
        </div>
    );
};

export default BlueButton;