// src/views/RacesView.js
import React from 'react';
import { alienRaces } from '../data/alienRaces';
import Carousel from '../components/carousel/Carousel';
import Header from '../components/header/Header';

const RacesView = () => {
  const titulo = "Razas"
  return (
    <div>
      <Header title={titulo} />
      <Carousel data={alienRaces} />
    </div>
  );
};

export default RacesView;