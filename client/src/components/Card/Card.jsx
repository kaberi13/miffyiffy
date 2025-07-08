import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ image, tittle, price, link }) {
  return (
    <div className='card'>
      <img className="img" src={image} alt={tittle} />
      <h2 className="tittle">{tittle}</h2>
      <p className='info'> Rs {price}</p>
      <div className='button-container'>
        {/* Wrap View button in Link to navigate */}
        <Link to={link} className='button view-button'>
          View
        </Link>
      </div>
    </div>
  );
}

export default Card;