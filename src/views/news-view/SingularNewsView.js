// SingularNewsView.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { alienNews } from '../../data/alienNews';
import Header from '../../components/header/Header';
import AlienCard from '../../components/card/AlienCard';
import './SingularNewsView.css';

const SingularNewsView = () => {
  const { id } = useParams();
  const alien = alienNews.find(alien => alien.id === Number(id));

  return (
    <div className="singular-news-view">
      <Header title={`Detailed News Number ${id}`}/>
      {alien && 
        <AlienCard 
          id={alien.id}
          image={alien.image} 
          title={alien.title} 
          content={alien.content}
          author={alien.author} 
          location={alien.country} 
          size="large"
          showButton={false}
        />
      }
    </div>
  );
};

export default SingularNewsView;