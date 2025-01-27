import React from 'react';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';


const Opinions = () => {
    return (
        <div  id='opinions' className='w-full readex-pro py-10 readex-pro'>
            <h1 className='text-4xl font-bold text-center text-blue-950'>Avis de nos utilisateurs</h1>
            <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

            <div className='block lg:flex w-[80%] m-auto mt-10'>
                <OpinionsCards image={clientExemple} title={`"La comptabilité automatique a simplifié ma gestion"`} desc={"La comptabilité automatique de Vintzen est une révolution. Je n’ai plus à passer des heures à trier mes ventes et mes dépenses, tout est calculé automatiquement. En quelques clics, j’ai un aperçu clair de mes marges et de mes coûts. Cela m’a permis d’économiser un temps précieux et d’éviter les erreurs dans ma gestion financière"} name={"Arthur"} job={"Revendeur sur Vinted"} />
                <OpinionsCards image={clientExemple} title={`"Un vrai gain de temps grâce aux statistiques détaillées"`} desc={"Depuis que j'utilise Vintzen, je peux enfin suivre précisément mes performances. Les statistiques détaillées me montrent quels articles se vendent le mieux et à quel moment publier. J’ai pu ajuster ma stratégie et augmenter mes ventes de 30% en un mois. Un indispensable pour les revendeurs sérieux !"} name={"Julie Martin"} job={"Revendeuse sur Vinted à temps plein"} />
            </div>
        </div>
    );
};

export default Opinions;