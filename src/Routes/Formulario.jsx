import React from "react";

const Formulario = ({ mostrarFormulario }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div>
      {mostrarFormulario && (
        <form onSubmit={handleSubmit}>
          {}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Formulario;
