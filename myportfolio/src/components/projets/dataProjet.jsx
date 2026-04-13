import OkaMeuble from '../../assets/okaMeuble.png'
import Portfolio from '../../assets/portfolio.png'

const BASE=import.meta.env.BASE_URL;

const dataProjets=
   [
        {   
            "id":1,
            "titre":"ACCESS COLLECT",
            "stacks":"Next.js, Tailwind, Postgresql, Drizzle, Docker, Neon, Jest, Playwright",
            "description":"AccessCollect est une application web de gestion de collectes de déchets. Elle remplace les processus papier par un outil digital accessible, conçu pour les personnes en situation de handicap, permettant un suivi simple et en temps réel des collectes.",
            "titregithub":"Repo Github",
            "github":"https://github.com/access-collect/access-collect",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"Visiter le site",
            "site":"https://access-collect.vercel.app/",
            "image":"",
            "video":BASE +"/videos/accesscollect.mp4"
        },
        {
            "id":2,
            "titre":"NEPHIS AIRLINES",
            "stacks":"Wordpress, Docker",
            "description":"Site WordPress avec plugins sur mesure pour la gestion interne d'une compagnie aérienne virtuelle : interface admin complète et espace pilote personnalisé. Amélioration continue",
            "titregithub":"Repo Github",
            "github":"https://github.com/synowski-jessica/air-nephis-plugins",
            "titregithubv2":"",
            "githubv2":"",
            "titreSite":"Visiter le site",
            "site":"https://air-nephis.fr/" ,
            "image": "",
            "video":BASE +"/videos/nephis.mp4"
        },
        {   
            "id":3,
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
            "video":BASE +"/videos/pictoria.mp4"
        },
        {
            "id":4,
            "titre":"MASTERMIND",
            "stacks":"HTML, CSS, JS",
            "description":"Projet personnel : Développement du jeu Mastermind. Actuellement, une version 1 est en cours de création pour refondre l’ensemble du code en programmation orientée objet (POO). Des tests unitaires sont également en développement, contrairement à la version 0 qui n’était pas testable. ",
            "titregithub":"Repo Github Vanilla JS",
            "github":"https://github.com/synowski-jessica/mastermind",
            "titregithubv2":"Repo Github POO JS",
            "githubv2":"https://github.com/synowski-jessica/mastermindV2POO",
            "titreSite":"Jouer",
            "site":"https://synowski-jessica.github.io/mastermind/" ,
            "image":"",
            "video":BASE +"/videos/mastermind.mp4"
        },
        {
            "id":5,
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
            "id":6,
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
            "video":BASE +"/videos/rainbow6.mp4"
        },
        {
            "id":7,
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
            "video":BASE +"/videos/dataviz.mp4"
        },
        {
            "id":8,
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
            "video":BASE +"/videos/reseauSocialPHP.mp4"
        },
        {
            "id":9,
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
    ]


export default dataProjets