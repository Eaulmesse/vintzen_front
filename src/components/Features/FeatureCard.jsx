import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="w-4/5 md:w-[30%] m-auto md:space-x-4 mt-10 readex-pro md:text-left text-center flex flex-col items-center md:items-start bg-white shadow-lg p-4 rounded-lg">
            <div className="md:ml-4 my-5">
                {icon}
            </div>
            <div className="w-5/6 m-auto my-5">
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;