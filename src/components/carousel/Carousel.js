// src/components/Carousel.js
import React from 'react';
import './Carousel.css';
import { alienRaces } from '../../data/alienRaces';

const Carousel = () => {
  const [current, setCurrent] = React.useState(0);

  const nextRace = () => {
    setCurrent(current === alienRaces.length - 1 ? 0 : current + 1);
  };

  const prevRace = () => {
    setCurrent(current === 0 ? alienRaces.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevRace}>Previous</button>
      <div className="carousel-content">
        <div className="carousel-image" style={{ backgroundImage: `url(${alienRaces[current].image})` }}></div>
        <div className="carousel-info">
          <h1>{alienRaces[current].name}</h1>
          <p>{alienRaces[current].description}</p>
          <ul>
            <li><span className="info-label">Origin:</span> {alienRaces[current].origin}</li>
            <li><span className="info-label">Population:</span> {alienRaces[current].population}</li>
            <li><span className={`info-label ${alienRaces[current].hostility >= 5 ? 'high-hostility' : ''}`}>
                Hostility: {alienRaces[current].hostility}
                </span></li>
            <li><span className="info-label">Objective:</span> {alienRaces[current].objective}</li>
          </ul>
        </div>
      </div>
      <button className="next-button" onClick={nextRace}>Next</button>
    </div>
  );
};

export default Carousel;