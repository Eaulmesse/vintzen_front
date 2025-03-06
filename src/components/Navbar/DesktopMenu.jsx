import React, { useState } from 'react';
import logoVintzen from '../../assets/images/logo-vintzen.svg';
import { motion } from "motion/react";
import NavbarButton from '../Misc/NavbarButton';
import MotionText from '../Animations/MotionText';

const DesktopMenu = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [linksWidth, setLinksWidth] = useState({});

    const handleHoverStart = (e, linkName) => {
        setHoveredLink(linkName);
        setLinksWidth(prev => ({
            ...prev,
            [linkName]: e.target.offsetWidth,  
        }));
    };

    const handleHoverEnd = () => {
        setHoveredLink(null);
        setLinksWidth({});
    };

    const links = [
        { name: 'accueil', href: '#hero' },
        { name: 'fonctionnalites', href: '#features' },
        { name: 'avis', href: '#opinions' },
        { name: 'tarifs', href: '#prices' },
        { name: 'faq', href: '#faq' },
        { name: 'news', href: '#news' },
    ];

    return (
        <nav className="w-full flex">
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                src={logoVintzen}
                className="absolute left-10 top-8 lg:left-2 w-32"
            />

            <div className="flex justify-center items-center readex-pro space-x-5 mx-auto bg-custom-purple text-white rounded-lg py-2 px-3 mt-5 shadow-custom">
                {links.map(({ name, href }) => (
                    <motion.a
                        key={name}
                        href={href}
                        className="abril-fatface text-base transition relative"
                        onMouseEnter={(e) => handleHoverStart(e, name)}
                        onMouseLeave={handleHoverEnd}
                    >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                        <MotionText
                            isParentHovered={hoveredLink === name}
                            textWidth={linksWidth[name] || 0}
                        />
                    </motion.a>
                ))}
                <NavbarButton href={'#prices'} text={'Commencez Maintenant !'} />
            </div>
        </nav>
    );
};

export default DesktopMenu;
