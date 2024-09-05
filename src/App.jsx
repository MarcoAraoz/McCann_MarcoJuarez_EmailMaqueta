import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ContactForm from './components/ContactForm'
import EmailTemplate from './components/EmailTemplate'

const App = () => {
  return (
    <div className="bg-gray-400">
      <nav className="bg-gray-700 p-4">
        <ul className="flex justify-center items-center space-x-4 m-2">
          <li>
            <Link to="/" className="text-lg font-semibold italic text-white hover:text-gray-200">
              Formulario de Contacto
            </Link>
          </li>
          <h2 className="text-4xl font-thin italic text-amber-500 mb-1">/</h2>
          <li>
            <Link to="/email-template" className="text-lg font-semibold italic text-white hover:text-gray-200">
              Plantilla de Email
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/email-template" element={<EmailTemplate nombre="Aldo" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App
