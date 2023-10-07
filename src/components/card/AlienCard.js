// src/components/AlienCard.js
import React from 'react';
import './AlienCard.css';

const AlienCard = ({ image, title, expectedAttendance, objective, content, author, location, size = 'small' }) => {
  const cardSize = {
    small: '200px',
    medium: '350px',
    large: '550px',
  };

  const cardStyle = {
    width: cardSize[size],
  };

  return (
    <div className="alien-card" style={cardStyle}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <span>{content}</span>    
      <p>{author}</p>
      <p>{location}</p>
      <p>{expectedAttendance}</p>
      <span>{objective}</span>
      <button className="view-more">View More ...</button>
    </div>
  );
};

export default AlienCard;