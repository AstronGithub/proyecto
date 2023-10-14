// src/views/RacesView.js
import React from 'react';
import { alienRaces } from '../../data/alienRaces';
import Carousel from '../../components/carousel/Carousel';
import Header from '../../components/header/Header';

const RacesView = () => {
  const titulo = "Razas"

  const racesData = alienRaces.map(race => ({
    image: race.image,
    name: race.name,
    origin: race.origin,
    population: race.population,
    hostility: race.hostility,
    objective: race.objective
  }));

  return (
    <div>
      <Header title={titulo} />
      <Carousel data={racesData} />
    </div>
  );
};

export default RacesView;