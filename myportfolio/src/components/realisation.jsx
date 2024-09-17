import FlecheGauche from '../assets/flecheGauche.png'
import FlecheDroite from '../assets/flecheDroite.png'
import Dataviz from '../assets/dataviz.mp4'

const Realisation =()=>{
    return(
        <>
        <div className="mt-16 flex justify-center items-center space-x-3">
            <img src={FlecheGauche} alt="fleche décoratif à gauche" className='w-24 h-12 md:w-96 md:h-32'/>
            <h1 id="realisations" className="text-colorRoseBackground text-2xl md:text-8xl text-center">Mes réalisations</h1>
            <img src={FlecheDroite} alt="fleche décoratif à gauche" className='w-24 h-12 md:w-96 md:h-32'/>
        </div>
        {/* 1er ligne de projet */}
        <div className='mt-6 grid grid-cols-1  text-center mx-4 md:grid-cols-11 gap-2  md:space-x-10'>
            <div className='md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            {/* 2e ligne de projet */}
            <div className='md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            {/* 3e ligne de projet */}
            <div className='md:col-start-2 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-5 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
            <div className='md:col-start-8 md:col-span-3 border border-colorRoseBackground custom-shadow  p-3 rounded-lg'>
                <video controls >
                    <source src={Dataviz} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
                <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
                <div className="mt-2 flex items-center justify-center">
                     <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
                     <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
                </div>
                <div className="mt-2">
                    <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
                    <p className="text-colorMarronFonce">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-10">
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
                    <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Realisation