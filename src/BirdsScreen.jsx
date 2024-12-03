import React, { useEffect, useState } from 'react';
import './BirdsScreen.Css'

const BirdsScreen = () => {
  const [birdsData, setBirdsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Función para consumir la API
    const fetchBirds = async () => {
      try {
        const response = await fetch('https://xeno-canto.org/api/2/recordings?query=cnt:guatemala');
        const data = await response.json();
        const formattedBirds = data.recordings.map((bird) => ({
          family: bird.gen,
          name: bird.en,
          location: bird.loc,
          discoverer: bird.rec,
          image: bird.url,
          audio: bird.file,
        }));
        setBirdsData(formattedBirds);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching birds data:', error);
        setIsLoading(false);
      }
    };

    fetchBirds();
  }, []);

  if (isLoading) {
    return <div className="loading">Cargando datos de aves...</div>;
  }

  return (
    <div className="birds-container">
      <h1>Aves de Guatemala</h1>
      <div className="birds-list">
        {birdsData.map((bird, index) => (
          <div key={index} className="bird-card">
            <div className="bird-info">
            {bird.audio && (
              <button
                className="play-sound"
                onClick={() => {
                  const audio = new Audio(bird.audio);
                  audio.play();
                }}
              >
                Reproducir Sonido
              </button>
            )}  
              <p><strong>Familia:</strong> {bird.family}</p>
              <p><strong>Nombre:</strong> {bird.name}</p>
              <p><strong>Ubicación:</strong> {bird.location}</p>
              <p><strong>Descubridor:</strong> {bird.discoverer}</p>
            </div>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirdsScreen;
