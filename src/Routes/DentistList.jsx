
import React, { useState, useEffect } from 'react';

const DentistList = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Aquí deberías hacer la llamada a la API para obtener la lista de dentistas
    // y actualizar el estado dentists con la respuesta
  }, []);

  return (
    <div>
      <h2>List of Dentists</h2>
      {dentists.map(dentist => (
        <div key={dentist.id}>
          <h3>{dentist.name}</h3>
          <p>{dentist.specialty}</p>
          {/* Agrega más información sobre el dentista según tu API */}
        </div>
      ))}
    </div>
  );
};

export default DentistList;

