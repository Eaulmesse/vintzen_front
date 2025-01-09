import React from 'react';
import BlueButton from '../Misc/BlueButton';


const PricingCard = ({ title, price, features }) => {
    return (
        <div className='bg-white w-4/5 lg:w-[30%] m-auto mt-10 py-5 rounded-lg'>
            <p className='m-auto bg-blue-100 text-blue-600 font-semibold  w-fit py-1 px-4 rounded-full'>{title}</p>

            <div className='w-fit m-auto text-center mt-5'>
                <p className='text-3xl font-semibold '>{price}</p>
                <p className='text-gray-600'>Par mois</p>
            </div>

            <p className='w-4/5 m-auto mt-5 text-center text-gray-600'>
                {features}
            </p>

            <div className='mt-5 w-4/5 m-auto text-center'>
                <BlueButton text={"Choisir cet abonnement"}/>
            </div>
            
        </div>
    );
};



export default PricingCard;