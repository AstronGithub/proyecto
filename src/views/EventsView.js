// Importing necessary libraries and components
import React from 'react';
import Header from '../components/header/Header';

// Function component for EventsView
function EventsView() {
  // Returns a JSX element
  return (
    <div>
      " Header component with title prop set to 'Events' "
      <Header title='Events' />
    </div>
  );
}

// Exporting the EventsView component for use in other files
export default EventsView;