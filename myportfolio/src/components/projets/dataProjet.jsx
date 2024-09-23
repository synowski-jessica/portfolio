import Dataviz from '../../assets/dataviz.mp4'
import ReseauSocialPHP from '../../assets/reseauSocialPHP.mp4'
import OkaMeuble from '../../assets/okaMeuble.png'
import Portfolio from '../../assets/portfolio.png'
import Mastermind from '../../assets/mastermind.mp4'
import Nephis from '../../assets/nephis.mp4'
import Pictoria from '../../assets/pictoria.mp4'
import AlaiaWave from '../../assets/alaiaWave.mp4'
import Rainbow from '../../assets/rainbow6.mp4'


const dataProjets=
   [
        {   
            "id":1,
            "titre":"PICTORIA",
            "stacks":"Laravel, Alpine.js, Tailwind, Postgresql",
            "description":"Création d’un site de microblogging similaire à Instagram, en utilisant Breeze pour la gestion de l’authentification et des connexions.",
            "titregithub":"Repo Github",
            "github":"https://github.com/synowski-jessica/le_trio-gourmet_jay",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"",
            "site":"",
            "image":"",
            "video":Pictoria
        },
        {
            "id":2,
            "titre":"MASTERMIND",
            "stacks":"HTML, CSS, JS",
            "description":"Projet personnel : Développement du jeu Mastermind. Actuellement, une version 1 est en cours de création pour refondre l’ensemble du code en <span className='font-bold'>programmation orientée objet (POO)</span>. Des <span className='font-bold'>tests unitaires</span> sont également en développement, contrairement à la version 0 qui n’était pas testable. ",
            "titregithub":"Repo Github Vanilla JS",
            "github":"https://github.com/synowski-jessica/mastermind",
            "titregithubv2":"Repo Github POO JS",
            "githubv2":"https://github.com/synowski-jessica/mastermindV2POO",
            "titreSite":"Jouer",
            "site":"https://synowski-jessica.github.io/mastermind/" ,
            "image":"",
            "video":Mastermind
        },
        {
            "id":3,
            "titre":"PORTFOLIO",
            "stacks":"React, Tailwind, Vite",
            "description":"Création de mon portfolio pour présenter mes projets collectifs et personnels. J’ai utilisé Canva pour concevoir la maquette en tirant parti des illustrations intégrées.",
            "titregithub":"Repo Github",
            "github":"https://github.com/synowski-jessica/portfolio",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"",
            "site":"" ,
            "image":Portfolio,
            "video":""
        },
        {
            "id":4,
            "titre":"RAINBOW 6 SIEGE",
            "stacks":"HTML, CSS, JS",
            "description":"Projet personnel : Création d’un site web pour jouer au jeu de société Rainbow 6 Siege. À l’origine, les équipes étaient formées de manière aléatoire via un tirage papier. J’ai donc développé un site permettant de générer des équipes aléatoires, où chaque joueur se voit attribuer aléatoirement ses attaquants et défenseurs.",
            "titregithub":"Repo Github",
            "github":"https://github.com/synowski-jessica/rainbow6",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"Visiter le site",
            "site":"https://synowski-jessica.github.io/rainbow6/" ,
            "image":"",
            "video":Rainbow
        },
        {
            "id":5,
            "titre":"LE TRIO GOURMET JAY",
            "stacks":"HTML, CSS, JS, API",
            "description":" Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon dynamique, simplifiant ainsi l’exploration culinaire.",
            "titregithub":"Repo Github",
            "github":"https://github.com/synowski-jessica/le_trio-gourmet_jay",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"Visiter le site",
            "site":"https://synowski-jessica.github.io/le_trio-gourmet_jay/" ,
            "image":"",
            "video":Dataviz
        },
        {
            "id":6,
            "titre":"RESEAU SOCIAL PHP",
            "stacks":"PHP natif avec BD phpMyAdmin",
            "description":" Nous devions créer un site web dynamique en interagissant avec la base de données via des requêtes SQL. Il a fallu gérer les authentifications, sessions et inscriptions via des formulaires.",
            "titregithub":"Repo Github",
            "github":"https://github.com/adatechschool/reseauSocialPHPhcj",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"",
            "site":"" ,
            "image":"",
            "video":ReseauSocialPHP
        },
        {
            "id":7,
            "titre":"OKA MEUBLES",
            "stacks":"Nodes.js,React,Tailwind,Postgresql",
            "description":" Réalisation d’un site web en collaboration avec deux équipes : l’une dédiée au back-end et l’autre au front-end, avec un échange des rôles au bout d’une semaine. Le travail a été mené selon la méthode agile, en s’appuyant sur des User Stories.",
            "titregithub":"Repo Github",
            "github":"https://github.com/adatechschool/projet-collectif-plateforme-de-vente-de-meubles-oka-meubles",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"",
            "site":"" ,
            "image":OkaMeuble,
            "video":""
        },
        {
            "id":8,
            "titre":"ALAIA WAVE",
            "stacks":"Kotlin, Go",
            "description":" Développement d’une application mobile sur l’IDE Android Studio pour le front-end, connectée à notre API développée en Go, répertoriant les meilleurs spots de surf.",
            "titregithub":"Repo Github Front",
            "github":"https://github.com/adatechschool/projetMobile-alaiaWave",
            "titregithubv2":"Repo Github Api Go",
            "githubv2":"https://github.com/adatechschool/projetmobile_back_alaiaWave",
            "titreSite":"",
            "site":"" ,
            "image":"",
            "video":AlaiaWave
        },
        {
            "id":9,
            "titre":"NEPHIS AIRLINES",
            "stacks":"Wordpress",
            "description":" Développement en cours d’un site WordPress utilisant Elementor pour la conception et PhpMyAdmin pour la gestion de la base de données, destiné à une compagnie aérienne virtuelle pour la gestion des pilotes et des formations.",
            "titregithub":"",
            "github":"",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"",
            "site":"" ,
            "image":"",
            "video":Nephis
        }
    ]


export default dataProjets