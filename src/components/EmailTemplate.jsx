/* eslint-disable react/prop-types */
import header from '../assets/images/1.jpg';
import footer from '../assets/images/2.jpg';
import action from '../assets/images/31.png';
import FacebookIcon from '../assets/images/face.jpg';
import TwitterIcon from '../assets/images/twitter.jpg';
import YTIcon from '../assets/images/youtube.jpg';
import InstagramIcon from '../assets/images/instagram.jpg';
import GoogleIcon from '../assets/images/google+.jpg';

const EmailTemplate = ({ nombre }) => {
  return (
    <div className="max-w-3xl mx-auto bg-stone-200 shadow-md rounded-sm mt-6">
      <div className="w-full">
        <img src={header} alt="Encabezado" className="w-full h-auto" />
      </div>

      <div className="pb-0 text-gray-800 mx-16 my-4">
        <h2 className="text-lg font-semibold italic text-gray-600 mb-4">{nombre}</h2>
        <p className="mb-4 italic">
          Creamos la familia <strong className='text-gray-600'>Chevrolet Sonic®</strong> para presentar por dentro y por fuera, tu estilo de vida.
          Cualquiera de nuestras versiones cuenta con el espacio adecuado, un diseño audaz y juvenil 
          caracterizado por líneas definidas, parrilla de doble puerto y faros expuestos, haciendo 
          imposible no capturar todas las miradas cuando vas a bordo de él.
          <br />
          <br />
          <strong className='text-gray-600 italic'>Además, diviértete mientras liberas el poder de su motor a donde sea que vayas sin perder
          la conectividad a la que estás acostumbrado, haciendo que tu experiencia de manejo
          sea inigualable.</strong> 
        </p>
      </div>

      <div className="w-full flex justify-center items-center mb-8 pt-0">
  <a href="http://www.chevrolet.com.mx/" target="_blank" rel="noopener noreferrer">
    <img src={action} alt="Pie de página" className="w-auto" />
  </a>
</div>
      <div className="w-full">
        <img src={footer} alt="Pie de página" className="w-full" />
      </div>

      <div className="w-full flex justify-center items-center space-x-2 p-4 bg-gray-200 rounded-b-lg">
        <h2 className="justify-self-stretch text-xs text-center font-medium italic mb-2 text-gray-700">
            <a href="http://www.chevrolet.com.mx/" target='_blank' className="text-gray-700 hover:underline">
                LOCALIZA TU DISTRIBUIDOR
            </a>
        </h2>
    <h2 className="text-4xl font-thin italic mb-4 text-amber-500">/</h2>
        <h2 className="text-base font-bold mb-3 text-gray-700">
            <a href="http://www.chevrolet.com.mx/" target='_blank' className="text-gray-700 hover:underline">
                chevrolet.mx
            </a>
        </h2>
    <h2 className="text-4xl font-thin italic m-0 mb-4 text-amber-500">/</h2>
    <h2 className="text-xs font-medium text-center italic mb-2 mr-4 text-gray-700">SÍGUENOS EN</h2>
        <a href="https://www.facebook.com/chevroletmexico?ref=ts&fref=ts" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="https://twitter.com/ChevroletMexico/" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="http://www.youtube.com/Chevroletmexicoo/" target="_blank" rel="noopener noreferrer">
          <img src={YTIcon} alt="YouTube" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="http://instagram.com/chevroletmexico/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="https://plus.google.com/+ChevroletM%C3%A9xico/post" target="_blank" rel="noopener noreferrer">
          <img src={GoogleIcon} alt="GooglePlus" className="w-11 h-auto mb-4 rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default EmailTemplate;