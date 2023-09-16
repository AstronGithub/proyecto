import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-item'>
        <Link to='/'>News</Link>
      </div>
      <div className='nav-item'>
        <Link to='/races'>Races</Link>
      </div>
      <div className='nav-item'>
        <Link to='/events'>Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;