import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css'; // Asegúrate de incluir el archivo CSS

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleLoad = () => {
    navigate('/birds'); // Navega a la pantalla de Birds
  };

  return (
    <div className="home-container">
      <h1>Inicio</h1>
      <div className="user-info">
        <p>Carlos Mauricio Escobar Aguilar</p>
        <p>22005409</p>
      </div>
      <button className="load-button" onClick={handleLoad}>
        Cargar
      </button>
    </div>
  );
};

export default HomeScreen;