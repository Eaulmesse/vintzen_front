import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <div id='prices' className='w-full bg-blue-950 readex-pro py-10'>
            <h1 className='text-white text-4xl font-bold text-center'>Pricing</h1>
            <p className='text-gray-400 text-center mt-5'>Here you can find our pricing plans.</p>

            <div className='block lg:flex w-[80%] m-auto'>
                {/* Changer les liens link par le lien de paiement stripe */}
                <PricingCard link={"#prices"} title='basic' price='10$' features={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                <PricingCard link={"#prices"} title='premium' price='15$' features={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                <PricingCard link={"#prices"} title='advanced' price='20$' features={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
            </div>
        </div>
    );
};
// 
export default Pricing;