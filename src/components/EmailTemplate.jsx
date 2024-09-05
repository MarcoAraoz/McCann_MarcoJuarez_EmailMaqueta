import header from '../assets/images/1.jpg'; // Imagen del header
import footer from '../assets/images/2.jpg'; // Imagen del footer
import action from '../assets/images/31.png'; // Icono de Facebook
import FacebookIcon from '../assets/images/face.jpg'; // Icono de Facebook
import TwitterIcon from '../assets/images/twitter.jpg'; // Icono de Facebook
import YTIcon from '../assets/images/youtube.jpg'; // Icono de Twitter
import InstagramIcon from '../assets/images/instagram.jpg'; // Icono de Twitter
import GoogleIcon from '../assets/images/google+.jpg'; // Icono de Twitter

const EmailTemplate = ({ nombre }) => {
  return (
    <div className="max-w-xl mx-auto bg-stone-200 shadow-md rounded-sm mt-6">
      {/* Header */}
      <div className="w-full">
        <img src={header} alt="Encabezado" className="w-full h-auto" />
      </div>

      {/* Body */}
      <div className="pb-0 text-gray-800 mx-10 my-4">
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

      {/* Footer */}
      <div className="w-full flex justify-center items-center mb-8 pt-0">
        <img src={action} alt="Pie de página" className="w-auto" />
        </div>
      <div className="w-full">
        <img src={footer} alt="Pie de página" className="w-full" />
      </div>

      {/* Social Icons */}
      <div className="w-full flex justify-center items-center space-x-2 p-4 bg-gray-200 rounded-b-lg">
      <h2 className="justify-self-stretch text-xs text-center font-medium italic mb-2 text-gray-700">LOCALIZA TU DISTRIBUIDOR</h2>
      <h2 className="text-4xl font-thin italic m-0 mb-4 text-amber-500">/</h2>
      <h2 className="text-base font-bold mb-4 text-gray-700">chevrolet.mx</h2>
      <h2 className="text-4xl font-thin italic m-0 mb-4 text-amber-500">/</h2>
      <h2 className="text-xs font-medium text-center italic mb-2 mr-4 text-gray-700">SíGUENOS EN</h2>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={YTIcon} alt="YouTube" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="w-11 h-auto mb-4 rounded-full" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={GoogleIcon} alt="GooglePlus" className="w-11 h-auto mb-4 rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default EmailTemplate;