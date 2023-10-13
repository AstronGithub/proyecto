import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigationbar/Navbar'
import './App.css';
import NewsView from './views/news-view/NewsView';
import RacesView from './views/races-view/RacesView';
import EventsView from './views/event-view/EventsView';
import SingularNewsView from './views/news-view/SingularNewsView';
import StoriesView from './views/stories-view/StoriesView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<NewsView />} />
        <Route path="/singularNewsView/:id" element={<SingularNewsView />} />
        <Route path='/races' element={<RacesView />} />
        <Route path='/events' element={<EventsView />} />
        <Route path="/stories" element={<StoriesView />} />
      </Routes>
    </Router>
  );
}

export default App;