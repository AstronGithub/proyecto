// src/components/Carousel.js
import React from 'react';
import './Carousel.css';

const Carousel = ({ data }) => {
  const [current, setCurrent] = React.useState(0);

  const nextRace = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevRace = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevRace}>Previous</button>
      <div className="carousel-content">
        <div className="carousel-image" style={{ backgroundImage: `url(${data[current].image})` }}></div>
        <div className="carousel-info">
          <h1>{data[current].name}</h1>
          <p>{data[current].description}</p>
          <ul>
            <li><span className="info-label">Origin:</span> {data[current].origin}</li>
            <li><span className="info-label">Population:</span> {data[current].population}</li>
            <li><span className={`info-label ${data[current].hostility >= 5 ? 'high-hostility' : ''}`}>
                Hostility: {data[current].hostility}
                </span></li>
            <li><span className="info-label">Objective:</span> {data[current].objective}</li>
          </ul>
        </div>
      </div>
      <button className="next-button" onClick={nextRace}>Next</button>
    </div>
  );
};

export default Carousel;