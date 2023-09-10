import React from 'react';
import './Card.css';

function Card({ nombre, partido, edad, nacionalidad }) {
    return (
        <div className="card-container">
            <div className="card-content">
                <h2 className="candidate-name">{nombre}</h2>
                <p className="candidate-party">{partido}</p>
                <p className="candidate-age">Edad: {edad}</p>
                <p>{nacionalidad}</p>
            </div>
            <div className="card-footer">
                <p>Running for Presidency in Argentina</p>
            </div>
        </div>
    );
}

export default Card;
