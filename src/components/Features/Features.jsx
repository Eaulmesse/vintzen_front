import React from 'react';
import FeatureCard from './FeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faFileInvoiceDollar, faBell, faRobot, faClock, faBrain } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div id='features' className='bg-gray-50 py-10 shadow-inner relative z-50'>
            <div className='md:w-3/6 w-5/6 max-w-xl m-auto readex-pro'>
                <div className='text-center'>
                    <h2 className='text-4xl text-blue-950 font-bold'>Ce que Vintzen vous offre :</h2>
                    <p className='mt-5 text-gray-600'>Soyez plus rapide, vendez plus.</p>
                </div>
            </div>

            <div className='w-[80%] m-auto flex flex-wrap justify-center gap-6 mt-10'>
                {/* Statistiques détaillées */}
                <FeatureCard
                    animdelay={"0.10"}
                    icon={<FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faChartLine} />}
                    title={"Statistiques détaillées"}
                    description={"Suivez vos performances de revente (articles vendus, revenus, etc.) avec des graphiques clairs."}
                />
                {/* Comptabilité automatisée */}
                <FeatureCard
                    animdelay={"0.20"}
                    icon={<FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faFileInvoiceDollar} />}
                    title={"Comptabilité automatisée"}
                    description={"Finie la galère d’organiser ses chiffres à la main. Tout est géré automatiquement."}
                />
                {/* Alertes personnalisées */}
                <FeatureCard
                    animdelay={"0.30"}
                    icon={<FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faBell} />}
                    title={"Alertes personnalisées"}
                    description={"Recevez des notifications pour ne manquer aucune opportunité."}
                />
                {/* Bot 0 délai */}
                <FeatureCard
                    animdelay={"0.40"}
                    icon={<FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faClock} />}
                    title={"Bot 0 délai"}
                    description={"Soyez le premier à interagir avec de nouvelles annonces."}
                    isComingSoon={true}
                />
                {/* Réponses automatiques */}
                <FeatureCard
                    animdelay={"0.50"}
                    icon={<FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faRobot} />}
                    title={"Réponses automatiques"}
                    description={"Envoyez des réponses personnalisées automatiquement."}
                    isComingSoon={true}
                />
                {/* IA pour estimation */}
                <FeatureCard
                    animdelay={"0.60"}
                    icon={<FontAwesomeIcon className='text-3xl text-blue-600 m-auto' icon={faBrain} />}
                    title={"IA pour estimation"}
                    description={"Obtenez des estimations précises grâce à l’IA."}
                    isComingSoon={true}
                />
            </div>
        </div>
    );
};

export default Features;
