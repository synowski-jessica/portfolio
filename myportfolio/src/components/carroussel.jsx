import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Dataviz from '../assets/dataviz.png'
import ReseauSocialPHP from '../assets/reseauSocialPHP.mp4'

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container mt-8 mx-3">
      <Slider {...settings} className="mx-3">
        <div className="bg-colorRoseNav p-5 custom-shadow text-center mx-3 rounded-md">
          <img src={Dataviz} alt="projet dataviz" className="w-96 h-60 mt-2 rounded-sm"/>
          <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
          <div className="mt-2 flex items-center justify-center">
            <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
            <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
          </div>
          <div className="mt-2">
            <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
            <p className="text-colorMarronFonce text-justify">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-10">
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
          </div>
        </div>
        <div className="bg-colorRoseNav p-5 custom-shadow text-center mx-10 rounded-md">
            <video controls >
                <source src={ReseauSocialPHP} type="video/mp4" className="w-96 h-60 mt-2 rounded-md" />
                Votre navigateur ne prend pas en charge la balise vidéo.
            </video>
          <h5 className="text-colorMarronFonce mt-2">Réseau social PHP</h5>
          <div className="mt-2 flex items-center justify-center">
            <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
            <p className="text-colorMarronFonce">PHP natif avec BD phpMyAdmin</p>
          </div>
          <div className="mt-2">
            <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
            <p className="text-colorMarronFonce text-justify">Nous devions créer un site web dynamique en interagissant avec la base de données via des requêtes SQL. Il a fallu gérer les authentifications, sessions et inscriptions via des formulaires. </p>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-10">
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/adatechschool/reseauSocialPHPhcj" target='_blank'>Repo Github</a></h6>
          </div>
        </div>
        <div className="bg-colorRoseNav p-5 custom-shadow text-center mx-10 rounded-md">
          <img src={Dataviz} alt="projet dataviz" className="w-96 h-60 mt-2"/>
          <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
          <div className="mt-2 flex items-center justify-center">
            <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
            <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
          </div>
          <div className="mt-2">
            <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
            <p className="text-colorMarronFonce text-justify">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-10">
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
          </div>
        </div>
        <div className="bg-colorRoseNav p-5 custom-shadow text-center mx-10 rounded-md">
          <img src={Dataviz} alt="projet dataviz" className="w-96 h-60 mt-2"/>
          <h5 className="text-colorMarronFonce mt-2">Le trio gourmet Jay</h5>
          <div className="mt-2 flex items-center justify-center">
            <h6 className="text-sm text-colorMarronFonce">Stack utilisées:</h6>
            <p className="text-colorMarronFonce">HTML, CSS, JS, API</p>
          </div>
          <div className="mt-2">
            <h6 className="text-sm text-colorMarronFonce">Objectif:</h6>
            <p className="text-colorMarronFonce text-justify">Développement d’un site de recettes culinaires qui utilise une API (https://www.themealdb.com/) pour offrir aux utilisateurs la possibilité de découvrir des recettes de façon  dynamique, simplifiant ainsi l’exploration culinaire </p>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-10">
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://github.com/synowski-jessica/le_trio-gourmet_jay" target='_blank'>Repo Github</a></h6>
            <h6 className="text-sm text-colorMarronFonce italic hover:border border-colorMarronFonce p-2 rounded-full"><a href="https://synowski-jessica.github.io/le_trio-gourmet_jay/" target='_blank'>Visiter le site</a></h6>
          </div>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;