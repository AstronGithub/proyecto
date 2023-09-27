// src/components/Cartas.js
import React from 'react';
import './Cartas.css';

const Cartas = ({ data, size }) => {
    const cardSize = {
      small: '200px',
      medium: '400px',
      large: '800px',
    };
  
    const cardStyle = {
      width: cardSize[size] || '300px', // default size is 'medium'
      // other styles...
    };
  return (
    <div className="cards">
      {data.map((item, index) => (
        <div key={index} className="card" style={cardStyle}>
          <img src={item.image} alt={item.name} className="card__image" />
          <h2 className="card__title">{item.name}</h2>
          <p className="card__description">{item.description}</p>
          <p className="card__location">{item.location}</p>
          <p className="card__attendance">{item.expectedAttendance}</p>
          <p className="card__objective">{item.objective}</p>
        </div>
      ))}
    </div>
  );
};

export default Cartas;