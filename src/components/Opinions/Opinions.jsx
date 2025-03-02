import React from 'react';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';
import DiscordCard from './DiscordCard';


const Opinions = () => {
    return (
        <div  id='opinions' className='w-custom md:w-[50%] readex-pro py-10 m-auto'>

            <h1 className='text-3xl font-bold text-center'><span className='text-custom-purple'>Avis</span> de nos <span className='text-custom-purple'>utilisateurs</span></h1>
            <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 mt-5'>
                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"col-span-12 lg:col-span-8"} 
                />

                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"col-span-12 lg:col-span-4"} 
                />

                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"col-span-12 lg:col-span-4"} 
                />

                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"col-span-12 lg:col-span-8"} 
                />
                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"col-span-12 lg:col-span-4"}
                />

                <DiscordCard
                    thumbnail={clientExemple}
                    title={"Rejoignez nous sur discord !"}
                    link={"https://discord.gg/Wdhy2EA3"}
                    text={"Soyez le prochain à nous donner votre avis !"}
                    width={"col-span-12 lg:col-span-8"} 
                />
            </div>
        </div>
    );
};

export default Opinions;