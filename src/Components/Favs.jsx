import React, { useEffect, useState } from 'react';

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('favs');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFavoriteDentists(parsedData);
    }
  }, []);

  return (
    <div>
      <h2>Dentistas Destacados</h2>
      {favoriteDentists.map((dentist) => (
        <div key={dentist.id}>
          <h3>{dentist.name}</h3>
          {}
        </div>
      ))}
    </div>
  );
};

export default Favs;
