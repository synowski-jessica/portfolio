import Skills from '../assets/skills.png'
import Equipe from '../assets/equipe.png'
import Curiosite from '../assets/curiosite.png'
import Autonomie from '../assets/autonomie.png'
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhpmyadmin } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Competences = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations
        });
      }, []);
    return (
        <>
            <div id="competences" className="mt-6 grid grid-cols-1 md:grid-cols-10 gap-2  md:space-x-10">
                <div className='relative bg-colorRoseBackground text-3xl text-white md:col-start-1 md:col-span-11 md:text-8xl text-center p-4 flex justify-center items-center'>
                     {/* Cercle décoratif en haut à gauche */}
                    <div className="absolute top-0 left-0 w-16 h-16 md:w-40 md:h-40 border-2 border-colorMarronFonce rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
                   
                    <img src={Skills} alt="photo skills" className='w-24 h-20 md:h-36 md:w-48'/>
                    <h1 className='md:ml-24'>Mes compétences</h1>
                    {/* Éléments de décoration (3 étages de points) */}
                    <div className="absolute -bottom-6 md:-bottom-36  right-2 md:right-4 space-x-1 flex md:space-x-3 ">
                        {/* Ligne 1 */}
                        <div className="flex flex-col space-y-2 md:space-y-3">
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                        </div>
                        {/* Ligne 2 (décalée) */}
                        <div className="flex flex-col space-y-2 md:space-y-3 mt-2">
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                        </div>
                        {/* Ligne 3 (décalée) */}
                        <div className="flex flex-col space-y-2 md:space-y-3 mt-4 ">
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                        </div>
                    </div>
                     {/* Éléments de décoration (3 étages de points) */}
                     <div className="absolute -bottom-[450px] md:-bottom-[500px] left-2 md:left-4 flex space-x-1 md:space-x-3 ">
                        {/* Ligne 1 */}
                        <div className="flex flex-col space-y-2 md:space-y-3">
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                        </div>
                        {/* Ligne 2 (décalée) */}
                        <div className="flex flex-col space-y-2 md:space-y-3 mt-2">
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                        </div>
                        {/* Ligne 3 (décalée) */}
                        <div className="flex flex-col space-y-2 md:space-y-3 mt-4 ">
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="w-1 h-1 md:w-3 md:h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                            <div className="hidden md:block w-3 h-3 bg-colorMarron rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mx-4 md:mx-auto md:col-span-4 md:col-start-2 bg-colorRoseNav rounded-md mt-3 md:mt-8 custom-shadow" data-aos="flip-right" data-aos-delay="400" data-aos-duration="1400">
                    <h5 className="text-center tracking-widest text-3xl text-colorMarronFonce shadow-md shadow-colorRoseBackground p-2" >MES SOFTSKILLS</h5>
                    <div className="p-2">
                        <h6 className="text-center text-colorMarronFonce text-lg font-bold">** Esprit d’équipe **</h6>
                        <div className="flex justify-around items-center mt-2">
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>Multiples projets  de groupe avec la méthode Agile pendant la formation chez ADA où la <span className='font-bold'>communication</span> est la clé</p>
                                <img src={Equipe} alt="image d'équipe" className='w-48 h-24'/>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-3">
                        <h6 className="text-center text-colorMarronFonce text-lg font-bold">** Curiosité & apprentissage continu **</h6>
                        <div className="flex justify-around items-center mt-2">
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>Intérêt pour l’apprentissage de nouvelles technologies et tendances du développement web</p>
                                <img src={Curiosite} alt="image d'équipe" className='w-24 h-24'/>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-3">
                        <h6 className="text-center text-colorMarronFonce text-lg font-bold">** Organisation & Autonomie **</h6>
                        <div className="flex justify-around items-center mt-2">
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>Capacité à travailler de manière autonome et à gérer efficacement les projets sans supervision constante.</p>
                                <img src={Autonomie} alt="image d'équipe" className='w-24 h-24'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 mx-4 md:mx-auto md:col-span-4 bg-colorRoseNav rounded-md mt-3 md:mt-8 custom-shadow"data-aos="flip-left" data-aos-delay="400" data-aos-duration="1600">
                    <h5 className="text-center tracking-widest text-3xl text-colorMarronFonce shadow-md shadow-colorRoseBackground p-2">MES HARDSKILLS</h5>
                    <div className="p-2 mt-3">
                        <h6 className="text-center text-colorMarronFonce text-lg font-bold">** Frameworks et Librairies **</h6>
                        <div className="flex justify-around items-center mt-4">
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>REACT</p>
                                <FaReact className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>LARAVEL</p>
                                <FaLaravel  className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>NODE.JS</p>
                                <FaNode className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>TAILWIND</p>
                                <RiTailwindCssFill className="text-colorMarronFonce text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-8 md:mt-16">
                        <h6 className="text-center text-colorMarronFonce text-lg font-bold">** Base de données **</h6>
                        <div className="flex justify-around items-center mt-4">
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>MYSQL</p>
                                <DiMysql className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>PHPMYADMIN</p>
                                <SiPhpmyadmin className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>POSTGRESQL</p>
                                <DiPostgresql  className="text-colorMarronFonce text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-8 md:mt-16">
                        <h6 className="text-center text-colorMarronFonce text-lg font-bold">** Divers **</h6>
                        <div className="flex justify-around items-center mt-4">
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>WORDPRESS</p>
                                <FaWordpressSimple   className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>FIGMA</p>
                                <FaFigma   className="text-colorMarronFonce text-2xl" />
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-colorMarronFonce text-xs'>DOCKER</p>
                                < FaDocker className="text-colorMarronFonce text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Competences;
