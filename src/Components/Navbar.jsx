import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = ({ mostrarFormulario, toggleFormulario }) => {

  return (
    
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change </button>
      <div>
      <button onClick={toggleFormulario}>Formulario</button>
      
    </div>
    </nav>
  )
}

export default Navbar
