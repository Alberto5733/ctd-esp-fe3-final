import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DentistDetail = () => {
const { id } = useParams();
const [dentist, setDentist] = useState(null);

useEffect(() => {
    
}, [id]);

if (!dentist) {
    return <div>Loading...</div>;
}

return (
    <div>
    <h2>{dentist.name}</h2>
    <p>Nombre {dentist.nombre}</p>
    <p>Apellido: {dentist.apellido}</p>
    <p>Telefono: {dentist.telefono}</p>
    </div>
);
};

export default DentistDetail;

