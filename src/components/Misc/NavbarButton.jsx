import React from 'react';

const NavbarButton = ({ text, href, variant = 'default' }) => {

    const variants = {
        default: 'bg-custom-green hover:bg-custom-green-cta',
        primary: 'bg-custom-purple hover:bg-custom-purple-cta',
        secondary: 'bg-gray-500 hover:bg-gray-600',
    };

    return (
        <div className={`${variants[variant]}  text-white  p-2 rounded-md flex justify-center items-center shadow-lg cursor-pointer hover:shadow-inner`}>
            <a href={href} className='text-md'>{text}</a>
        </div>
    );
};

export default NavbarButton;