// src/components/NewsView.js
import React from 'react';
import { alienRaces } from '../data/alienRaces';
import AlienCard from '../components/card/AlienCard';

const NewsView = () => (
  <div className="news-view">
    {alienRaces.map((alien, index) => (
      <AlienCard key={index} alien={alien} />
    ))}
  </div>
);

export default NewsView;