import React, { useState, useEffect } from 'react';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
  
  }, []);

  return (
    <div>
      <h2>List of Dentists</h2>
      {dentists.map(dentist => (
        <div key={dentist.id}>
          <h3>{dentist.name}</h3>
          <p>{dentist.specialty}</p>
          {}
        </div>
      ))}
    </div>
  );
};

export default Home;
