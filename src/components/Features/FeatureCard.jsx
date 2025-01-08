import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="w-5/6 md:w-3/6 m-auto md:space-x-4 mt-10 readex-pro md:text-left text-center flex flex-col items-center md:items-start">
            <div className="md:ml-4">
                {icon}
            </div>
            <div className="w-5/6 m-auto">
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;