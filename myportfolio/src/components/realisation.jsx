import FlecheGauche from '../assets/flecheGauche.png'
import FlecheDroite from '../assets/flecheDroite.png'
import Dataviz from '../assets/dataviz.mp4'
import ReseauSocialPHP from '../assets/reseauSocialPHP.mp4'
import OkaMeuble from '../assets/okaMeuble.png'
import Rainbow from '../assets/rainbow6.png'
import Portfolio from '../assets/portfolio.png'
import Mastermind from '../assets/mastermind.mp4'
import Nephis from '../assets/nephis.mp4'
import Pictoria from '../assets/pictoria.mp4'
import Alaia1 from '../assets/alaia1.png'
import Alaia2 from '../assets/alaia2.png'


const Realisation =()=>{
    return(
        <>
        <div className="mt-16 flex justify-center items-center space-x-3">
            <img src={FlecheGauche} alt="fleche décoratif à gauche" className='w-24 h-12 md:w-96 md:h-32'/>
            <h1 id="realisations" className="text-colorRoseBackground text-2xl md:text-8xl text-center">Mes réalisations</h1>
            <img src={FlecheDroite} alt="fleche décoratif à gauche" className='w-24 h-12 md:w-96 md:h-32'/>
        </div>
        <div className='mt-6 text-center grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-10 mx-4'>
            <div className='md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow p-4 rounded-lg'>
            <video controls >
                    <source src={Pictoria} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">PICTORIA</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">Laravel, Alpine.js, Tailwind, Postgresql</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Création d’un site de microblogging similaire à Instagram, en utilisant Breeze pour la gestion de l’authentification et des connexions.  </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                </div>
            </div>
            <div className='md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Mastermind} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">MASTERMIND</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Projet personnel : Développement du jeu Mastermind. Actuellement, une version 1 est en cours de création pour refondre l’ensemble du code en <span className='font-bold'>programmation orientée objet (POO)</span>. Des <span className='font-bold'>tests unitaires</span> sont également en développement, contrairement à la version 0 qui n’était pas testable. </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/mastermind" target='_blank'>Repo Github Vanilla JS</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/mastermindV2POO" target='_blank'>Repo Github POO JS</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/mastermind/" target='_blank'>Jouer</a></h6>
                </div>
            </div>
            <div className='md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <img src={Portfolio} alt="photo portfolio" />
                <h5 className="text-colorMarronFonce mt-2">PORTFOLIO</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">React, Tailwind, Vite</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Création de mon portfolio pour présenter mes projets collectifs et personnels. J’ai utilisé Canva pour concevoir la maquette en tirant parti des illustrations intégrées.</p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/portfolio" target='_blank'>Repo Github</a></h6>
                </div>
            </div>
             {/* 2e ligne de projet */}
             <div className='md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <img src={Rainbow} alt="rainbow 6 siege"/>
                <h5 className="text-colorMarronFonce mt-2">RAINBOW 6 SIEGE</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Projet personnel : Création d’un site web pour jouer au jeu de société Rainbow 6 Siege. À l’origine, les équipes étaient formées de manière aléatoire via un tirage papier. J’ai donc développé un site permettant de générer des équipes aléatoires, où chaque joueur se voit attribuer aléatoirement ses attaquants et défenseurs. </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/rainbow6" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/rainbow6/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">LE TRIO GOURMET JAY</h5>
                <div className="mt-2 flex items-center justify-center space-x-2">
                    <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                    <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">
                        Développement d’un site de recettes culinaires qui utilise une API 
                        (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité 
                        de découvrir des recettes de façon dynamique, simplifiant ainsi l’exploration culinaire.
                    </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-4">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full">
                        <a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a>
                    </h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full">
                        <a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a>
                    </h6>
                </div>
            </div>
            <div className='md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={ReseauSocialPHP} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">RESEAU SOCIAL PHP</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">PHP natif avec BD phpMyAdmin</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Nous devions créer un site web dynamique en interagissant avec la base de données via des requêtes SQL. Il a fallu gérer les authentifications, sessions et inscriptions via des formulaires. </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/adatechschool/reseauSocialPHPhcj" target='_blank'>Repo Github</a></h6>
                </div>
            </div>
            {/* 3e ligne de projet */}
            <div className='md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <img src={OkaMeuble} alt="site oka meuble" className=""/>
                <h5 className="text-colorMarronFonce mt-2">OKA MEUBLES</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">Nodes.js,React,Tailwind,Postgresql</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Réalisation d’un site web en collaboration avec deux équipes : l’une dédiée au back-end et l’autre au front-end, avec un échange des rôles au bout d’une semaine. Le travail a été mené selon la méthode agile, en s’appuyant sur des User Stories. </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/adatechschool/projet-collectif-plateforme-de-vente-de-meubles-oka-meubles" target='_blank'>Repo Github</a></h6>
                </div>
            </div>
            <div className='md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <div className='flex justify-center space-x-2'>
                    <div>
                        <img src={Alaia1} className='w-48 h-30 mt-2 rounded-md'/>
                    </div>
                    <div>
                        <img src={Alaia2} className='w-48 h-30 mt-2 rounded-md'/>
                    </div>
                </div>
                
                <h5 className="text-colorMarronFonce mt-2">ALAIA WAVE</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">Kotlin, Go</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’une application mobile sur l’IDE Android Studio pour le front-end, connectée à notre API développée en Go, répertoriant les meilleurs spots de surf.</p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/adatechschool/projetMobile-alaiaWave" target='_blank'>Repo Github Front</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/adatechschool/projetmobile_back_alaiaWave" target='_blank'>Repo Github Api Go</a></h6>
                </div>
            </div>
            <div className='md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Nephis} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">NEPHIS AIRLINES</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">WORDPRESS</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement en cours d’un site WordPress utilisant Elementor pour la conception et PhpMyAdmin pour la gestion de la base de données, destiné à une compagnie aérienne virtuelle pour la gestion des pilotes et des formations.</p>
                    <p className="text-colorMarronFonce"></p>
                </div>
                
            </div>
        </div>
        
        </>
    )
}
export default Realisation