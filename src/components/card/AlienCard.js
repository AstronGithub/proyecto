// src/components/AlienCard.js
import React from 'react';
import './AlienCard.css';

const AlienCard = ({ image, title, content, author, country }) => (
  <div className="alien-card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <span>{content}</span>    
    <p>{author}</p>
    <p>{country}</p>
    <button className="view-more">View More ...</button>
  </div>
);

export default AlienCard;