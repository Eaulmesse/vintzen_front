import React from 'react';

const BlueButton = ({ text, href }) => {
    return (
        <div className='bg-custom-green text-white h-16 px-5 rounded-md flex justify-center items-center shadow-lg cursor-pointer hover:bg-custom-green-cta hover:shadow-inner'>
            <a href={href} className='text-lg'>{text}</a>
        </div>
    );
};

export default BlueButton;