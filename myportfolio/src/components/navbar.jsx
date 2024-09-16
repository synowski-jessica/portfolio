import LogoLight from '../assets/logoLight2.png'
import BanderoleCoeur from '../assets/banderoleCoeur.png'
import {useState, useEffect} from 'react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`sticky top-0 left-0 w-full z-50 flex items-center justify-between p-4 transition-all duration-300 ${isScrolled ? 'bg-opacity-80 bg-colorRoseNav text-colorMarron' : 'text-colorMarronFonce bg-colorRoseBackground'}`}>
         {/* Logo à gauche  */}
        <div className="logo">
          <img src={LogoLight} alt="Logo" className="h-16" />
        </div>
        <div>
          <img src={BanderoleCoeur} className="h-24 -mt-6" />
        </div>
  
        {/* Navigation à droite */}
        <ul className="flex space-x-10">
          <li><a href="#accueil" className=" py-2 px-4 border border-colorMarronFonce rounded-full text-colorMarronFonce font-bold tracking-widest">ACCUEIL</a></li>
          <li><a href="#apropos" className="font-bold tracking-widest">A PROPOS</a></li>
          <li><a href="#competences" className="font-bold tracking-widest">MES COMPETENCES</a></li>
          <li><a href="#realisations" className="font-bold tracking-widest">MES REALISATIONS</a></li>
          <li><a href="#contact" className="font-bold tracking-widest">CONTACT</a></li>
        </ul>
      </nav>
      
    );
  };
  
  export default Navbar