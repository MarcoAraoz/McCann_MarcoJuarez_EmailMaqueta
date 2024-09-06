import { useState } from 'react';
import banner  from '../assets/images/1.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'El nombre es requerido';
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone_number) {
      newErrors.phone_number = 'El teléfono es requerido';
    } else if (!phonePattern.test(formData.phone_number)) {
      newErrors.phone_number = 'El teléfono debe tener 10 dígitos';
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://18.205.103.247/registers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('Datos enviados exitosamente');
          setFormData({ name: '', phone_number: '', email: '' }); // Limpiar formulario
          setErrors({});
        } else {
          console.error('Error al enviar datos');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  return (
  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-stone-200 shadow-md rounded-sm mt-6">
    <div className='text-center'>
      <img src={banner} alt="banner" className="w-full h-auto mb-6" />
    </div>
    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Formulario de contacto</h1>
    <div className="mb-4 px-6">
      <label className="block text-sm font-semibold text-gray-800 mb-2">Nombre:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg border-gray-400 focus:outline-none focus:border-gray-600"
      />
      {errors.name && <span className="text-sm text-red-600">{errors.name}</span>}
    </div>

    <div className="mb-4 px-6">
      <label className="block text-sm font-semibold text-gray-800 mb-2">Teléfono:</label>
      <input
        type="text"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg border-gray-400 focus:outline-none focus:border-gray-600"
      />
      {errors.phone_number && <span className="text-sm text-red-600">{errors.phone_number}</span>}
    </div>

    <div className="mb-4 px-6">
      <label className="block text-sm font-semibold text-gray-800 mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg border-gray-400 focus:outline-none focus:border-gray-600"
      />
      {errors.email && <span className="text-sm text-red-600">{errors.email}</span>}
    </div>
    <div className="flex justify-center">
      <button type="submit" className="w-1/2 py-2 px-4 my-8 text-white bg-gray-700 rounded-lg hover:bg-gray-800">
        Enviar
      </button>
    </div>

    
  </form>
  );
};

export default ContactForm;