import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Icone = () => {
    return (
        <div className='flex space-x-12 mt-8 md:mt-24 md:ml-48'>
            <div>
                <a href="https://www.linkedin.com/in/jessica-synowski-43a962a3/" target='_blank'><FaLinkedin className='size-16 text-white'/></a>
            </div>
                <div>
                <a href="https://github.com/synowski-jessica/" target='_blank'><FaGithub className='size-16 text-white'/></a>
            </div>
            <div>
                <a href="../public/cvJessicaSynowskiV3.pdf" target='_blank' download className='text-white text-6xl'><h4>CV</h4></a>
            </div>
        </div>
        
      
    );
  };
  
  export default Icone