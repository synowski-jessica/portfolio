import Aboutme from '../assets/aboutme.png';
import BandeauPointGauche from '../assets/bandeauVerticalPointGauche.png';
import BandeauPointDroit from '../assets/bandeauVerticalPointDroite.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Apropos = () => {
    useEffect(() => {
        AOS.init({
          duration: 1400, // Durée des animations
          delay:"200",// Ajouter un délai avant le début de l'animation
        });
      }, []);
    return (
        <>
            <div id="apropos" className='mt-6 grid grid-cols-12 gap-2 space-x-4'>
                {/* Image de gauche */}
                <div className='col-start-1 col-span-2 flex justify-center hidden md:flex'>
                    <img src={BandeauPointGauche} alt="Frise gauche" />
                </div>

                {/* Contenu principal */}
                <div className='col-start-1 md:col-start-3 col-span-12 md:col-span-8'>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <div className=''>
                            <img src={Aboutme} alt="photo d'une personne" className='w-full h-24 md:w-auto md:h-full' />
                        </div>
                        <div>
                            <h1 className="text-colorRoseBackground text-4xl md:text-8xl text-center">A propos de moi</h1>
                        </div>
                    </div>

                    {/* Section des cartes */}
                    <div className='grid grid-cols-1 mr-4 md:mr-auto md:grid-cols-8 gap-8 mt-4'>
                        <div className='col-span-1  md:col-span-4 border border-colorRoseBackground p-3 rounded-lg custom-shadow ' data-aos="fade-down-right" >
                            <h2 className='text-colorMarron text-center text-lg italic'>Pourquoi avoir choisi de faire une reconversion professionnelle ?</h2>
                            <p className='text-colorMarron my-3 text-sm '>Après dix ans d’expérience en tant qu’assistante de gestion, j’ai ressenti le besoin de m’orienter <span className='font-bold'>vers un métier plus stimulant sur le plan intellectuel. </span></p>
                            <p className='text-colorMarron my-3 text-sm '>Malgré la variété des tâches que j’ai pu accomplir au fil des années, ce travail est peu à peu devenu routinier. J’aspire à un rôle qui me permette de <span className='font-bold'>réfléchir</span>, de <span className='font-bold'>résoudre des problèmes</span> et d’<span className='font-bold'>apprendre continuellement</span>. C’est cette part de nouveauté et de défi qui alimente mon épanouissement professionnel.</p>
                        </div>

                        <div className='col-span-1 md:col-span-4 border border-colorRoseBackground p-3 rounded-lg custom-shadow' data-aos="fade-down-left">
                            <h2 className='text-colorMarron text-center text-lg italic'>Pourquoi le développement web ?</h2>
                            <p className='text-colorMarron my-3 text-sm '>Ce qui m’a attirée dans l’informatique, c’est l’envie de comprendre ce qui se cache derrière les ERP. J’ai commencé à apprendre en <span className='font-bold'>autodidacte</span>, passant des heures à coder, jusqu’à ce que mon conjoint me rappelle qu’il était temps d’aller se coucher 😂.</p>
                            <p className='text-colorMarron my-3 text-sm '>Mon annéed d’alternance a confirmé ce coup de coeur pour ce domaine. Que ce soit le back-end ou le front-end, je trouve cet <span className='font-bold'>univers passionnant</span>, sans place pour la routine. J’ai cependant une <span className='font-bold'>préférence pour le front</span>, qui stimule ma <span className='font-bold'>créativité</span>. Aujourd’hui, j’ai enfin le sentiment d’avoir trouvé ma voie.
                            </p>
                        </div>

                        <div className='col-span-1 md:col-span-4 border border-colorRoseBackground p-3 rounded-lg custom-shadow' data-aos="fade-up-right">
                            <h2 className='text-colorMarron text-center text-lg italic'>Que puis-je apporter à une équipe ?</h2>
                            <p className='text-colorMarron my-3 text-sm '>Je suis <span className='font-bold'>toujours de bonne humeur</span> et possède un excellent sens de l’organisation, ce qui me permet de m’<span className='font-bold'>adapter facilement</span> à tout environnement de travail. </p>
                            <p className='text-colorMarron my-3 text-sm '>Fortement expérimentée dans le domaine des ERP, j’ai acquis une <span className='font-bold'>compréhension approfondie des besoins des utilisateurs</span>, ce qui me permet d’apporter des compétences complémentaires en gestion et en développement.</p>
                            <p className='text-colorMarron my-3 text-sm '><span className='font-bold'>Dynamique</span>, <span className='font-bold'>curieuse</span> et <span className='font-bold'>motivée</span>, je suis prête à contribuer activement à la réussite collective et à continuer d’apprendre au sein de l’équipe.</p>
                        </div>

                        <div className='col-span-1 md:col-span-4 border border-colorRoseBackground p-3 rounded-lg custom-shadow' data-aos="fade-up-left">
                            <h2 className='text-colorMarron text-center text-lg italic'>Quels sont mes loisirs en dehors du code?</h2>
                            <p className='text-colorMarron my-3 text-sm '>
                            Depuis toujours, le sport occupe une place centrale dans ma vie. Après 14 ans de <span className='font-bold'>gymnastique</span> en compétition, j’ai poursuivi cette passion en tant que secrétaire de l’association gymnique FJEP. Je pratique également la <span className='font-bold'>pole dance</span>, qui demande force et créativité, et l’<span className='font-bold'>escalade</span>, un sport qui me pousse à relever de nouveaux défis. </p>
                            <p className='text-colorMarron my-3 text-sm '>En dehors du sport, j’apprécie les <span className='font-bold'>jeux de société</span>, des jeux de plateau aux jeux d’ambiance, pour partager des moments conviviaux. Enfin, je m’adonne à des loisirs créatifs, notamment les <span className='font-bold'>montages photo et vidéo</span>, qui stimulent mon imagination.</p>
                        </div>
                    </div>
                </div>

                {/* Image de droite */}
                <div className='col-start-11 col-span-2 flex justify-center hidden md:flex'>
                    <img src={BandeauPointDroit} alt="Frise droite" />
                </div>
            </div>
        </>
    );
};

export default Apropos;
