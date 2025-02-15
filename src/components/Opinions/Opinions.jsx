import React from 'react';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';


const Opinions = () => {
    return (
        <div  id='opinions' className='md:w-3/6 w-5/6 readex-pro py-10 readex-pro m-auto'>
            <h1 className='text-3xl font-bold text-center'><span className='text-custom-purple'>Avis</span> de nos <span className='text-custom-purple'>utilisateurs</span></h1>
            <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

            <div className='space-y-2 mt-5'>
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-1/3"} />

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