// src/views/EventsView.js
import React from 'react';
import AlienCard from '../../components/card/AlienCard';
import { alienEvents } from '../../data/alienEvents';
import './EventsView.css';

const EventsView = () => {
  return (
    <div>
      <h1>Events View</h1>
      <div className="cards-container">
        {alienEvents.map((event, index) => (
          <AlienCard key={index} title={event.name} content={event.description} {...event} size='large' />
        ))}
      </div>
    </div>
  );
};

export default EventsView;