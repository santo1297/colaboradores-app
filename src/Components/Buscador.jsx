import React, { useState, useEffect } from 'react';
import { BaseColaboradores } from '../data/BaseColaboradores'; // Importa la lista de colaboradores

function Buscador({ colaboradores, setColaboradores }) {
  const [busqueda, setBusqueda] = useState('');

  const handleBusqueda = (e) => {
    const valorBusqueda = e.target.value.toLowerCase();
    setBusqueda(valorBusqueda);

    if (valorBusqueda === '') {
      setColaboradores(BaseColaboradores); // Restablecemos la lista original si la búsqueda está vacía
    } else {
      const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(valorBusqueda) ||
        colaborador.correo.toLowerCase().includes(valorBusqueda) ||
        colaborador.edad.includes(valorBusqueda) ||
        colaborador.cargo.toLowerCase().includes(valorBusqueda) ||
        colaborador.telefono.includes(valorBusqueda)
      );
      setColaboradores(colaboradoresFiltrados);
    }
  };

  useEffect(() => {
    // Restablecer la lista original si la búsqueda está vacía
    if (busqueda === '') {
      setColaboradores(BaseColaboradores);
    }
  }, [busqueda, setColaboradores]);

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar un colaborador"
        value={busqueda}
        onChange={handleBusqueda}
      />
    </div>
  );
}

export default Buscador;
