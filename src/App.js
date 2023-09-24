import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigationbar/Navbar'
import './App.css';
import NewsView from './views/news-view/NewsView';
import RacesView from './views/races-view/RacesView';
import EventsView from './views/event-view/EventsView';

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