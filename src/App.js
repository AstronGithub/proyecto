import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the React Learning Platform</h1>
        <p>
          You've taken your first step into the world of React. This platform will guide you through the foundational concepts and advanced techniques of React development.
        </p>
        <section className="App-resources">
          <h2>Getting Started</h2>
          <ul>
            <li>Begin by editing <code>src/App.js</code> to see live changes.</li>
            <li>Explore the React documentation to deepen your understanding.</li>
            <li>Stay curious and don't be afraid to break things. That's how learning happens!</li>
          </ul>
        </section>
        <footer className="App-footer">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official React Documentation
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
