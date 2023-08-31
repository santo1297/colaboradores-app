import React, { useState } from 'react';
import Alert from './Alert';

function Formulario({ agregarColaborador, mostrarAlerta }) { // Agregar mostrarAlerta como prop
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
  
      if (nombre.trim() === '' || correo.trim() === '' || edad.trim() === '' || cargo.trim() === '' || telefono.trim() === '') {
        mostrarAlerta('Completa Todos los Campos', 'danger');
      } else if (!isValidEmail(correo)) {
        mostrarAlerta('Correo Inválido', 'danger');
      } else {
        agregarColaborador({
          nombre,
          correo,
          edad,
          cargo,
          telefono,
        });
  
        mostrarAlerta('Registro Exitoso', 'success');
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
    }
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo">Email Colaborador</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad">Edad del Colaborador</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo">Cargo del Colaborador</label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono">Teléfono Colaborador</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
      </form>
    </div>
  );
}

export default Formulario;
