// src/views/RacesView.js
import React from 'react';
import { alienRaces } from '../data/alienRaces';
import Carousel from '../components/carousel/Carousel';

const RacesView = () => {
  return (
    <div>
      <h1>Alien Races</h1>
      <Carousel data={alienRaces} />
    </div>
  );
};

export default RacesView;