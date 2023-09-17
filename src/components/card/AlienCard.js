// src/components/AlienCard.js
import React from 'react';
import './AlienCard.css';

const AlienCard = ({ alien }) => (
  <div className="alien-card">
    <img src={alien.image} alt={alien.name} />
    <h2>{alien.name}</h2>
    <p>{alien.description}</p>
    <p>Origen: {alien.origin}</p>
    <p>Población: {alien.population}</p>
    <p>Hostilidad: {alien.hostility}</p>
    <p>Objetivo: {alien.objective}</p>
  </div>
);

export default AlienCard;