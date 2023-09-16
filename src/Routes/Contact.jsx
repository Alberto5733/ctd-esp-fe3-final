import React from 'react'
import Form from '../Components/Form'

const Contact = () => {}
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const validateForm = () => {
    const newErrors = {};
    if (formData.nombre.length <= 5) {
      newErrors.nombre = 'El nombre debe tener más de 5 caracteres';
    }

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validateForm();
  if (Object.keys(newErrors).length === 0) {
    const successMessage = `Gracias ${formData.nombre}, te contactaremos a través de correo electrónico pronto.`;
    setSuccessMessage(successMessage);
  } else {
    setErrors(newErrors);
  }
};

<button type="submit">Enviar</button>

export default Contact