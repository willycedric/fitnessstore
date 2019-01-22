import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => (

    <div className={props.card.animation}>
      <Link to={`/product/${props.card.id}`} className="item">
      <div className="front">
        <img src="https://sc01.alicdn.com/kf/HTB1TRGgisnI8KJjSsziq6z8QpXaL/2017-hot-sell-plastic-juice-bottle-PET.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>{props.card.title}</h3>
          <h3><span className="price"> ${props.card.price}</span></h3>
          <p>{props.card.description}</p>
        </div>
      </div>
      </Link>
    </div>

);
export default Card;
