import LogoLight from '../assets/logoLight4.png'
import BanderoleCoeur from '../assets/banderoleCoeur.png'
import {useState, useEffect} from 'react'
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)
  

  const content = <>
  <div className='lg:hidden block absolute top-16 mr-3 rounded-lg w-60 h-44 right-0 bg-colorRoseNav transition'>
     <ul className=" text-xl p-5 ">
          <li><a href="#accueil" className="my-4">ACCUEIL</a></li>
          <li><a href="#apropos" className="my-4">A PROPOS</a></li>
          <li><a href="#competences" className="my-4">MES COMPETENCES</a></li>
          <li><a href="#realisations" className="my-4">MES REALISATIONS</a></li>
          <li><a href="#contact" className="my-4">CONTACT</a></li>
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
          <img src={LogoLight} alt="Logo" className={` transition-all duration-500  ${isScrolled ? ' h-12 md:h-12 ' : 'h-16 md:h-16'}`}  />
        </div>
        <div className='flex items-center flex-1'>
          <img src={BanderoleCoeur} className={` transition-all duration-500  ${isScrolled ? 'h-12 mt-4 md:h-16 md:-mt-6' : 'h-16 -mt-6 md:h-24 md:-mt-6 '}`} />
        </div>
  
        {/* Navigation à droite */}
        <div className='lg:flex md:flex lg:flex-1 font-normal justify-end hidden'>
          <ul className="flex items-center text-center space-x-10 ">
            <li><a href="#accueil" className=" py-2 px-4 border  border-colorMarronFonce rounded-full text-colorMarronFonce font-bold tracking-widest hover:bg-colorRoseNav">ACCUEIL</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#apropos" className="font-bold  tracking-widest">A PROPOS</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#competences" className="font-bold tracking-widest">MES COMPETENCES</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#realisations" className="font-bold tracking-widest">MES REALISATIONS</a></li>
            <li className='hover:underline hover:decoration-colorMarronFonce '><a href="#contact" className="font-bold tracking-widest">CONTACT</a></li>
          </ul>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>
          {click?<FaTimes />:<CiMenuFries />}
        </button>

      </nav>
      
    );
  };
  
  export default Navbar