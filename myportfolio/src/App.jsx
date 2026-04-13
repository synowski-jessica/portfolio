
import DeveloppeuseFullstack from './components/developpeuseFullstack';
import PresentationMain from './components/presentationMain';
import Icone from './components/icone';
import Photo from './assets/moi.png'
import './index.css';
import Apropos from './components/apropos'
import Competences from './components/competences';
import Realisation from './components/projets/realisation';
import Contact from './components/contact'
import FooterWeb from './components/footer';





function App() {
    return (
    <>
      {/* 1ere section */}
      <div id="accueil"
        className="min-h-screen bg-cover bg-center bg-[url('/src/assets/accueilMobile.png')] md:bg-[url('/src/assets/backgroundLight.png')] lg:bg-[url('/src/assets/backgroundLight.png')]"
         
      >
        <div className='grid grid-cols-12 gap-2 mx-8'>
            <div className='col-span-12 md:col-span-5'>
              <DeveloppeuseFullstack/>
              <PresentationMain/>
              <Icone/>
            </div>
            <div className='hidden md:flex items-center justify-center col-start-8 col-span-5'>
            <div className="rounded-full overflow-hidden w-[550px] h-[550px] border-[3px] border-colorMarron">
              <img 
                src={Photo} 
                alt="photo de profil" 
                className="w-full h-full object-cover object-top"
              />
            </div>
        </div>
          </div>
      </div>
       {/* 2e section */}
      <Apropos/>
      {/* 3e section */}
      <Competences/>
      {/* 4e section */}
      <Realisation/>
      <Contact/>
      <div>
        <FooterWeb/>
      </div>
  
    </>
  )
}

export default App
