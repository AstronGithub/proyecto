// src/views/EventsView.js
import React from 'react';
import Cartas from '../../components/cartas/Cartas';
import { alienEvents } from '../../data/alienEvents';

const EventsView = () => {
  return (
    <div>
      <h1>Events View</h1>
      <Cartas data={alienEvents} size="medium" />
    </div>
  );
};

export default EventsView;