import LogoLight from '../assets/logoLight4.png'
import BanderoleCoeur from '../assets/banderoleCoeur.png'
import {useState, useEffect} from 'react'
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import Project from "../assets/project.png";
import AboutNavbar from "../assets/aboutnavbar.png";
import SkillNavbar from "../assets/skillNavbar.png"
import { MdContactMail } from "react-icons/md";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

   const content = <>
   <div className={`lg:hidden block absolute top-16 right-0 mr-3 rounded-lg w-72 h-60 border border-colorMarronFonce bg-colorRoseNav transition-transform duration-500 ${click ? 'translate-y-0' : '-translate-y-full'} `}>
     <ul className=" text-xl p-5 space-y-4">
          <li className='flex space-x-2'>
            <IoHome className='text-2xl' />
            <a href="#accueil" onClick={handleClick} className="">ACCUEIL</a>
          </li>
          <li className='flex space-x-2'>
            <img src={AboutNavbar} className="size-7 -ml-1" alt="icone a propos de moi"/>
            <a href="#apropos" onClick={handleClick} className="">A PROPOS</a>
          </li>
          <li className='flex space-x-1'>
            <img src={SkillNavbar} className=" w-9 -ml-2" alt="icone compétences"/>
            <a href="#competences" onClick={handleClick} className="">MES COMPETENCES</a></li>
          <li className='flex space-x-2'>
            <img src={Project} className="size-7 -ml-1" alt="icone projet"/>
            <a href="#realisations" onClick={handleClick} className="">MES REALISATIONS</a></li>
          <li className='flex items-center space-x-2'>
            <MdContactMail className='text-2xl'/>
            <a href="#contact" onClick={handleClick} className="">CONTACT</a>
          </li>
        </ul>
    </div></>
 

  useEffect(() => {
    const handleScroll = () => {
      // Modifier l'état si le défilement dépasse 0
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajouter l'écouteur de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <nav className={`sticky top-0 left-0 w-full z-50 flex items-center justify-between p-4 transition-all duration-300 ${isScrolled ? 'bg-opacity-80 bg-colorRoseNav text-colorMarronFonce' : 'text-colorMarronFonce bg-colorRoseBackground'}`}>
         {/* Logo à gauche  */}
        <div className="flex items-center flex-1">
          <img src={LogoLight} alt="Logo" className={` transition-all duration-500  ${isScrolled ? ' mt-4  h-12 md:h-12 ' : 'h-16 md:h-16'}`}  />
        </div>
        <div className='flex items-center flex-1'>
          <img src={BanderoleCoeur} alt="banderole décorative de coeur" className={` transition-all duration-500  ${isScrolled ? 'h-12 mt-4 md:h-16 md:-mt-6' : 'h-16 -mt-6 md:h-24 md:-mt-6 '}`} />
        </div>
  
        {/* Navigation à droite */}
        <div className='lg:flex md:flex lg:flex-1 font-normal justify-end hidden'>
          <ul className="flex items-center text-center space-x-10 ">
            <li><a href="#accueil" className=" py-2 px-4 border  border-colorMarronFonce rounded-full text-colorMarronFonce font-bold tracking-widest hover:bg-colorRoseNav">ACCUEIL</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#apropos" className="font-bold  tracking-widest">{click?<FaTimes />:"A PROPOS"}</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#competences" className="font-bold tracking-widest">MES COMPETENCES</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#realisations" className="font-bold tracking-widest">MES REALISATIONS</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#contact" className="font-bold tracking-widest">CONTACT</a></li>
          </ul>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block lg:hidden transition text-2xl' alt="menu de la navbar" onClick={handleClick}>
          {click?<FaTimes />:<CiMenuFries className='text-2xl' />}
        </button>

      </nav>
      
    );
  };
  
  export default Navbar