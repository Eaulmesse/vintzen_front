import React from 'react';
import { motion } from 'framer-motion';
import OpinionsCards from './OpinionsCards';
import clientExemple from '../../assets/images/client-exemple.jpg';
import DiscordCard from './DiscordCard';


const Opinions = () => {

    const opinions1 = [
        {name: "Sophie Martin", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Grâce à Vintzen, j'ai pu multiplier mes ventes par 3 en seulement quelques semaines. L'interface est intuitive et les fonctionnalités sont vraiment utiles."},
        {name: "Thomas Bernard", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Je gère mon activité Vinted beaucoup plus efficacement maintenant. Les statistiques m'aident vraiment à optimiser mes ventes."},
        {name: "Marie Dubois", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Un outil indispensable pour tous les vendeurs Vinted ! Le système d'alertes est particulièrement pratique."},
        {name: "Lucas Petit", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "La comptabilité automatisée m'a fait gagner des heures de travail. Je peux enfin me concentrer sur l'essentiel."},
        {name: "Emma Leroy", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Excellente application qui répond parfaitement aux besoins des vendeurs. Le support est très réactif."}
    ]

    const opinions2 = [
        {name: "Julie Moreau", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Vintzen a révolutionné ma façon de vendre sur Vinted. Les outils de suivi des prix sont particulièrement utiles pour rester compétitif."},
        {name: "Antoine Durand", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Depuis que j'utilise Vintzen, la gestion de mon stock est devenue un jeu d'enfant. Je recommande vivement !"},
        {name: "Claire Rousseau", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "L'automatisation des tâches répétitives m'a permis de doubler mon chiffre d'affaires. Un grand merci à l'équipe Vintzen !"},
        {name: "Nicolas Lambert", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "Les analyses détaillées de mes ventes m'ont aidé à mieux comprendre ma clientèle. Un outil vraiment professionnel."},
        {name: "Léa Girard", offerChoosen: "Bêta Tester", thumbnail: clientExemple, opinion: "La fonction de planification des publications est géniale. Je peux enfin organiser mes ventes à l'avance !"}
    ]

    return (
        <div id='opinions' className='my-10'>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} viewport={{ once: true }} className='text-3xl font-bold text-center text-custom-purple'>De nombreux vendeurs soutiennent déjà Vintzen !</motion.h1>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} viewport={{ once: true }} className='my-5 w-custom m-auto bg-custom-purple/10 rounded-lg p-5 shadow-inner overflow-hidden'>

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
                    {[...opinions1, ...opinions1].map((opinions1, index) => (
                        <OpinionsCards
                            key={index}
                            thumbnail={clientExemple}
                            name={opinions1.name}
                            offerChoosen={opinions1.offerChoosen}
                            opinion={opinions1.opinion}
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
                    {[...opinions2, ...opinions2].map((opinions2, index) => (
                        <OpinionsCards
                            key={index}
                            thumbnail={clientExemple}
                            name={opinions2.name}
                            offerChoosen={opinions2.offerChoosen}
                            opinion={opinions2.opinion}
                        />
                    ))}

                    
                </motion.div>
            </motion.div>

        </div>

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