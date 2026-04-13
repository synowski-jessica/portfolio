import GifComponent from "./gif";

const PresentationMain = () => {
    return (
        <>
        <div className="text-colorMarronFonce text-base w-72 md:w-auto md:text-xl p-3 md:mt-3 ml-2 mr-16">
            <p>Je m’appelle <span className="font-bold">Jessica Synowski</span>,  développeuse Full Stack - diplômée CDA, après 10 ans d’expérience en gestion.</p>
        </div>
        <div className="text-colorMarronFonce hidden md:block text-xl p-3 mt-3 ml-2 mr-16">
            <p>Mon objectif ? Concevoir des solutions digitales qui allient performance et créativité.</p>
        </div>
        <div className="relative">
            <div className="absolute -bottom-52 -right-10 md:-bottom-6 md:right-0">
                <GifComponent />
            </div>
        </div>
        <div className="text-colorMarronFonce w-72 text-base mt-52 ml-3 md:w-auto md:text-xl md:mt-6 md:ml-2 md:mr-16 bg-colorRoseNav p-3 rounded-md md:hover:mt-8 md:hover:text-xl md:transition ease-in-out delay-150  hover:scale-105  duration-300">
        
            <p>Je suis actuellement en poste en CDD mais reste à l’écoute des opportunités pour <span className="font-bold">un poste en CDI en tant que développeuse Full Stack ou Front-End à Saint-Etienne, Lyon ou en full remote</span>.</p>
        </div>
        
        </>
    );
  };
  
  export default PresentationMain