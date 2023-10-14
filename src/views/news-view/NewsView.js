// NewsView.js
import React from 'react';
import { alienNews } from '../../data/alienNews';
import { useNavigate } from 'react-router-dom';
import AlienCard from '../../components/card/AlienCard';
import "./NewsView.css"
import Header from "../../components/header/Header"

const NewsView = () => {
  const navigate = useNavigate();

  const renderAlienCards = () => {
    return alienNews.map((alien, index) => {
      // Elimina los espacios adicionales y los saltos de línea, luego divide el contenido en palabras
      let words = alien.content.replace(/\s+/g, ' ').trim().split(' ');

      // Toma las primeras 20 palabras
      const shortenedContent = words.slice(0, 20).join(' ');

      return (
        <AlienCard 
          key={index} 
          image={alien.image} 
          title={alien.title} 
          content={shortenedContent} // Usa el contenido acortado
          author={alien.author} 
          location={alien.country} 
          className="alien-card"
          onAlienButtonClick={() => navigate(`/singularNewsView/${alien.id}`)}
          showButton={true}
        />
      );
    });
  };

  return (
    <div className="news-view">
      <Header title="NEWS"/>
      <div className="grid-container">
        {renderAlienCards()}
      </div>
    </div>
  );
};

export default NewsView;