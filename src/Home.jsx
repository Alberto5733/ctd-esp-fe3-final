import React from 'react';
import { useAppContext } from './AppContext';

const Home = () => {
const { state } = useAppContext();

const dentistas = state.apiData ? state.apiData.dentistas : [];

return (
    <div>
    <h2>Lista de Dentistas</h2>
    <div className="card-list">
        {dentistas.map((dentista) => (
        <div key={dentista.id} className="card">
            <h3>{dentista.nombre}</h3>
            {}
        </div>
        ))}
    </div>
    </div>
);
};

export default Home;
