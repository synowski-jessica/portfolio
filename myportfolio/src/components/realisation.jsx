import FlecheGauche from '../assets/flecheGauche.png'
import FlecheDroite from '../assets/flecheDroite.png'

const Realisation =()=>{
    return(
        <>
        <div className="mt-16 flex justify-center">
            <img src={FlecheGauche} alt="fleche décoratif à gauche" className='w-96 h-24'/>
            <h1 id="realisations" className="text-colorRoseBackground text-4xl md:text-8xl text-center">Mes réalisations</h1>
            <img src={FlecheDroite} alt="fleche décoratif à gauche" className='w-96 h-24'/>
        </div>
        </>
    )
}
export default Realisation