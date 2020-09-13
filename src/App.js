import React from 'react';
import Conductor from './img/Conductor.jpg';
import Avenida from './img/Avenida.jpg';
import Ruta from './img/Ruta.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container Home">
      <div className="card">
      <img src={Avenida} alt="a" id="ImgHome"/>
      <div className="card-body">
        <h3 className="card-title">Bienvenidos a TaxiDrive</h3>
        <p className="card-text">Brindamos la posibilidad de que los usuarios puedan moverse de un lado a otro, pudiendo elegir su conductor para poder tener una mayor seguridad a la hora de viajar. </p>
        <p className="card-text">Lo hacemos a un muy bajo costo, de forma rapida y eficaz</p>
        <p>Descarga la APP y enterate de mas!</p>
      </div>
    </div>
      </div>
      
    </div>
  );
}

export default App;
