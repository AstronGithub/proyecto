import React from 'react';
import Card from './components/Card'
import candidatesData from './mock-data/candidatesData'
import './App.css';

function App() {
  return (
      <div className="app-container">
          {candidatesData.map(({ id, name, party, age, nacionalidad }) => (
              <Card key={id} nombre={name} partido={party} edad={age} nacionalidad={nacionalidad} />
          ))}
      </div>
  );
}

export default App;
