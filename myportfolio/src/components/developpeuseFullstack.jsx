import CoeurLight from '../assets/coeurLight.png'

const DeveloppeuseFullstack = () => {
    return (
        <div className='mt-16'>
                <h1 className="text-white  -mt-6 text-4xl ml-5 md:text-8xl tracking-widest">DEVELOPPEUSE</h1>
                <div className='flex space-x-4  ml-12 md:space-x-16 md:ml-10'>
                    <h1 className="text-white text-4xl  md:text-8xl tracking-widest">FULL</h1>
                    <h1 className="text-white  text-4xl  md:text-8xl tracking-widest">STACK</h1>
                </div>
                <img src={CoeurLight} alt="coeur de séparation de texte" className='w-20 ml-24 -mt-5 md:w-auto md:block md:-mt-12 md:ml-44'/>
       </div>      
    );
  };
  
  export default DeveloppeuseFullstack