// src/components/NewsView.js
import React from 'react';
import { alienNews } from '../../data/alienNews';
import AlienCard from '../../components/card/AlienCard';
import "./NewsView.css"
import Header from "../../components/header/Header"

const NewsView = () => (
  <div className="news-view">
    <Header title="NEWS"/>
    <div className="grid-container">
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
          location={alien.country} 
          className="alien-card" // Asegúrate de que cada tarjeta tenga esta clase
        />
      );
    })}
  </div>
  </div>
);

export default NewsView;