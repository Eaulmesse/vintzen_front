import React from 'react';
import FeatureCard from './FeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faFileInvoiceDollar, faBell, faRobot, faClock, faBrain } from '@fortawesome/free-solid-svg-icons';
import PreviewContent from '../../assets/images/preview.png'

import { ChartArea, BadgeEuro, Bell } from 'lucide-react';

const Features = () => {
    return (
        <div id='features' className='py-10 shadow-[rgba(0,0,5,0.1)_0px_-4px_6px_-1px] relative z-50'>
            <div className='md:w-3/6 w-[5/6] max-w-xl m-auto readex-pro text-center'>
                
                <h2 className='text-3xl font-bold'>Ce que <span className='text-custom-purple'>Vintzen</span> vous <span className='text-custom-purple'> offre :</span></h2>
                <p className='mt-5 text-gray-600'>Soyez plus rapide, vendez plus.</p>
                
            </div>

            <div className='mx-auto mt-5 rounded-lg w-custom md:w-custom-md bg-custom-purple bg-opacity-20 border-2 border-dashed border-custom-purple shadow-custom'>
                
                <FeatureCard
                    animdelay={"0.10"}
                    icon={<ChartArea size={200} color='#D2CDF5'/> }
                    title={"Statistiques détaillées"}
                    description={"Suivez vos performances de revente (articles vendus, revenus, etc.) avec des graphiques clairs."}
                    content={PreviewContent}
                    contentAlt={"Statistiques détaillées"}
                    bgColor={"bg-custom-purple"}
                    contentColor={"text-white"}
                />
                <FeatureCard
                    animdelay={"0.10"}
                    icon={<BadgeEuro size={200} color='#4F4B67'/> }
                    title={"Statistiques détaillées"}
                    description={"Suivez vos performances de revente (articles vendus, revenus, etc.) avec des graphiques clairs."}
                    content={PreviewContent}
                    contentAlt={"Statistiques détaillées"}
                    bgColor={"bg-custom-purple-secondary"}
                    contentColor={"text-custom-purple"}
                />
                <FeatureCard
                    animdelay={"0.10"}
                    icon={<Bell size={200} color='#D2CDF5'/> }
                    title={"Statistiques détaillées"}
                    description={"Suivez vos performances de revente (articles vendus, revenus, etc.) avec des graphiques clairs."}
                    content={PreviewContent}
                    contentAlt={"Statistiques détaillées"}
                    bgColor={"bg-custom-purple"}
                    contentColor={"text-white"}
                />
   
            </div>
        </div>
    );
};

export default Features;
