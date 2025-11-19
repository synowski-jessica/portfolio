import CoeurLight from '../assets/coeurLight.png'

const DeveloppeuseFullstack = () => {
    return (
        <div className='mt-36 md:mt-48  xl:mt-56 2xl:mt-72'>
                <h1 className="text-white -mt-12 text-4xl ml-5 xl:text-8xl tracking-widest">DEVELOPPEUSE</h1>
                <div className='flex space-x-4  ml-12 xl:space-x-16 xl:ml-10'>
                    <h1 className="text-white text-4xl  xl:text-8xl tracking-widest">FULL</h1>
                    <h1 className="text-white  text-4xl  xl:text-8xl tracking-widest">STACK</h1>
                </div>
                <img src={CoeurLight} alt="coeur de séparation de texte" className='w-20 ml-24 -mt-5 xl:w-auto xl:block xl:-mt-12 xl:ml-44'/>
       </div>      
    );
  };
  
  export default DeveloppeuseFullstack