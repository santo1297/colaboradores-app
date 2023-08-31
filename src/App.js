import React, { useState } from 'react';
import Listado from './Components/Listado';
import Formulario from './Components/Formulario';
import Buscador from './Components/Buscador';
import Alert from './Components/Alert';
import { BaseColaboradores } from './data/BaseColaboradores'; // Importa la lista de colaboradores
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    mostrarAlerta('Registro Exitoso', 'success');
  };

  const mostrarAlerta = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  return (
    <div className="container">
      <h1>Colaboradores APP</h1>
      <div className="row">
        <div className="col-md-12">
          <Buscador
            colaboradores={colaboradores}
            setColaboradores={setColaboradores}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Listado colaboradores={colaboradores} />
        </div>
        <div className="col-md-4">
          <Formulario
            agregarColaborador={agregarColaborador}
            mostrarAlerta={mostrarAlerta}
          />
          <Alert message={alertMessage} type={alertType} />
        </div>
      </div>
    </div>
  );
}

export default App;