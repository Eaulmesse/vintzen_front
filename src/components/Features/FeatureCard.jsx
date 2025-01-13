import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="w-4/5 lg:w-[30%] m-auto lg:space-x-4 mt-10 readex-pro lg:text-left text-center flex flex-col items-center lg:items-start bg-white shadow-lg p-4 rounded-lg">
            <div className="md:ml-4 my-5">
                {icon}
            </div>
            <div className="w-5/6 m-auto my-5">
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-600 mt-5'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;