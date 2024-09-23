import FlecheGauche from '../../assets/flecheGauche.png'
import FlecheDroite from '../../assets/flecheDroite.png'
import CardProject from './cardProjet'


const Realisation =()=>{
    return(
        <>
        <div className="mt-16 flex justify-center items-center space-x-3">
            <img src={FlecheGauche} alt="fleche décoratif à gauche" className='w-24 h-12 md:w-96 md:h-32'/>
            <h1 id="realisations" className="text-colorRoseBackground text-2xl md:text-8xl text-center">Mes réalisations</h1>
            <img src={FlecheDroite} alt="fleche décoratif à gauche" className='w-24 h-12 md:w-96 md:h-32'/>
        </div>
        <div className='mt-6 text-center grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-10 mx-4'>
            <CardProject/>
        </div>
        
        </>
    )
}
export default Realisation