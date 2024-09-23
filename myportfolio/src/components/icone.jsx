import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Icone = () => {
    return (
        <div className='flex justify-center items-center space-x-12 mt-6 md:mt-24 md:ml-48'>
            <div>
                <a href="https://www.linkedin.com/in/jessica-synowski-43a962a3/" target='_blank'><FaLinkedin className='size-8 md:size-16 text-white'/></a>
            </div>
                <div>
                <a href="https://github.com/synowski-jessica/" target='_blank'><FaGithub className='size-8 md:size-16 text-white'/></a>
            </div>
            <div>
                <a href="https://synowski-jessica.github.io/portfolio/cvJessicaSynowski.pdf" target='_blank' download className='text-white text-3xl md:text-6xl'><h4>CV</h4></a>
            </div>
        </div>
        
      
    );
  };
  
  export default Icone