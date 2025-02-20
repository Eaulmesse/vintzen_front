import React from 'react';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';


const Opinions = () => {
    return (
        <div  id='opinions' className='w-custom readex-pro py-10 readex-pro m-auto'>
            <h1 className='text-3xl font-bold text-center'><span className='text-custom-purple'>Avis</span> de nos <span className='text-custom-purple'>utilisateurs</span></h1>
            <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

            <div className='space-y-2 md:space-y-0 mt-5 md:space-x-2 md:flex md:flex-wrap h-40'>
                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-2/3"} />

                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-1/3"} />
            </div>
        </div>
    );
};

export default Opinions;