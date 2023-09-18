// src/components/NewsView.js
import React from 'react';
import { alienNews } from '../data/alienNews';
import AlienCard from '../components/card/AlienCard';
import "./NewsView.css"

const NewsView = () => (
  <div className="news-view">
    {alienNews.map((alien, index) => {
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
          country={alien.country} 
        />
      );
    })}
  </div>
);

export default NewsView;