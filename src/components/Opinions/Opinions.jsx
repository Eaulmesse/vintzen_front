import React from 'react';
import { motion } from 'framer-motion';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';
import DiscordCard from './DiscordCard';


const Opinions = () => {

    const opinions = [
        {name: "Sophie Martin", offerChoosen: "Bêta Tester", opinion: "Grâce à Vintzen, j'ai pu multiplier mes ventes par 3 en seulement quelques semaines. L'interface est intuitive et les fonctionnalités sont vraiment utiles."},
        {name: "Thomas Bernard", offerChoosen: "Bêta Tester", opinion: "Je gère mon activité Vinted beaucoup plus efficacement maintenant. Les statistiques m'aident vraiment à optimiser mes ventes."},
        {name: "Marie Dubois", offerChoosen: "Bêta Tester", opinion: "Un outil indispensable pour tous les vendeurs Vinted ! Le système d'alertes est particulièrement pratique."},
        {name: "Lucas Petit", offerChoosen: "Bêta Tester", opinion: "La comptabilité automatisée m'a fait gagner des heures de travail. Je peux enfin me concentrer sur l'essentiel."},
        {name: "Emma Leroy", offerChoosen: "Bêta Tester", opinion: "Excellente application qui répond parfaitement aux besoins des vendeurs. Le support est très réactif."}
    ]

    return (
        <>
            <h1 className='text-3xl font-bold text-center text-custom-purple'>De nombreux vendeurs soutiennent déjà Vintzen !</h1>
            
            <div className='my-5 w-custom m-auto bg-custom-purple/15 rounded-lg p-5 shadow-inner overflow-hidden'>
                <motion.div 
                    className='flex gap-2'
                    animate={{
                        x: [0, -1500],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    whileHover={{ 
                        animationPlayState: "paused" 
                    }}
                >
                    {[...opinions, ...opinions].map((opinion, index) => (
                        <OpinionsCards
                            key={index}
                            thumbnail={clientExemple}
                            name={opinion.name}
                            offerChoosen={opinion.offerChoosen}
                            opinion={opinion.opinion}
                        />
                    ))}

                    
                </motion.div>

                <motion.div 
                    className='flex gap-2 mt-2'
                    animate={{
                        x: [0, -1500],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                   
                >
                    {[...opinions, ...opinions].map((opinion, index) => (
                        <OpinionsCards
                            key={index}
                            thumbnail={clientExemple}
                            name={opinion.name}
                            offerChoosen={opinion.offerChoosen}
                            opinion={opinion.opinion}
                        />
                    ))}

                    
                </motion.div>
            </div>

        </>

    )
    // return (
    //     <div  id='opinions' className='w-custom md:w-[50%] readex-pro py-10 m-auto'>

    //         <h1 className='text-3xl font-bold text-center'><span className='text-custom-purple'>Avis</span> de nos <span className='text-custom-purple'>utilisateurs</span></h1>
    //         <p className='text-gray-400 text-center mt-5 w-[80%] m-auto'>Découvrez comment Vintzen a transformé la manière de vendre pour nos utilisateurs :</p>

    //         <div className='grid grid-cols-1 lg:grid-cols-12 gap-2 mt-5'>
                
    //             <OpinionsCards
    //                 thumbnail={clientExemple}
    //                 name={"Jean Dupont"}
    //                 offerChoosen={"Bêta Tester"}
    //                 opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
    //                 width={"col-span-12 lg:col-span-8"} 
    //             />

    //             <OpinionsCards
    //                 thumbnail={clientExemple}
    //                 name={"Jean Dupont"}
    //                 offerChoosen={"Bêta Tester"}
    //                 opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
    //                 width={"col-span-12 lg:col-span-4"} 
    //             />

                
    //             <OpinionsCards
    //                 thumbnail={clientExemple}
    //                 name={"Jean Dupont"}
    //                 offerChoosen={"Bêta Tester"}
    //                 opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
    //                 width={"col-span-12 lg:col-span-4"} 
    //             />

    //             <OpinionsCards
    //                 thumbnail={clientExemple}
    //                 name={"Jean Dupont"}
    //                 offerChoosen={"Bêta Tester"}
    //                 opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
    //                 width={"col-span-12 lg:col-span-8"} 
    //             />
                
    //             <OpinionsCards
    //                 thumbnail={clientExemple}
    //                 name={"Jean Dupont"}
    //                 offerChoosen={"Bêta Tester"}
    //                 opinion={"Vintzen m'a permis de gagner un temps considérable dans la vente de mes produits. Je recommande vivement"}
    //                 width={"col-span-12 lg:col-span-4"}
    //             />

    //             <DiscordCard
    //                 thumbnail={clientExemple}
    //                 title={"Rejoignez nous sur discord !"}
    //                 link={"https://discord.gg/Wdhy2EA3"}
    //                 text={"Soyez le prochain à nous donner votre avis !"}
    //                 width={"col-span-12 lg:col-span-8"} 
    //             />
    //         </div>
    //     </div>
    
};

export default Opinions;