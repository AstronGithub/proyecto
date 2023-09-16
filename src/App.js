import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigationbar/Navbar'
import './App.css';
import NewsView from './views/NewsView';
import RacesView from './views/RacesView';
import EventsView from './views/EventsView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<NewsView />} />
        <Route path='/races' element={<RacesView />} />
        <Route path='/events' element={<EventsView />} />
      </Routes>
    </Router>
  );
}

export default App;