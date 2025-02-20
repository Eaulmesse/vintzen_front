import React from 'react';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';
import DiscordCard from './DiscordCard';


const Opinions = () => {
    return (
        <div  id='opinions' className='w-custom readex-pro py-10 readex-pro m-auto'>
            <h1 className='text-3xl font-bold text-center'><span className='text-custom-purple'>Avis</span> de nos <span className='text-custom-purple'>utilisateurs</span></h1>
            <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

            <div className='space-y-2 md:space-y-0 mt-5 md:flex md:flex-wrap md:h-48 xl:h-40'>
                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-[66%]"} 
                />

                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-[34%]"} 
                />

                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-[33%]"} 
                />

                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-[67%]"} 
                />
                
                <OpinionsCards
                    thumbnail={clientExemple}
                    name={"Jean Dupont"}
                    offerChoosen={"Bêta Tester"}
                    opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
                    width={"w-full lg:w-[50%]"}
                />

                <DiscordCard
                    thumbnail={clientExemple}
                    title={"Rejoignez nous sur discord !"}
                    link={"https://discord.gg/Wdhy2EA3"}
                    text={"Soyez le prochain à nous donner votre avis !"}
                    width={"w-full lg:w-[50%]"} 
                />
            </div>
        </div>
    );
};

export default Opinions;