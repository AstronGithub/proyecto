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
      <button onClick={prevRace}>Previous</button>
      <div className="carousel-content" style={{ backgroundImage: `url(${data[current].image})` }}>
        <h2>{data[current].name}</h2>
        <p>{data[current].description}</p>
        <p>Origin: {data[current].origin}</p>
        <p>Population: {data[current].population}</p>
        <p>Hostility: {data[current].hostility}</p>
        <p>Objective: {data[current].objective}</p>
      </div>
      <button onClick={nextRace}>Next</button>
    </div>
  );
};

export default Carousel;