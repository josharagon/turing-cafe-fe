import React from 'react';
import './Card.css';

const Card = ({name, date, time, numOfGuests}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h2>{date}</h2>
            <h2>{time}</h2>
            <h2>Guests: {numOfGuests}</h2>
            <button className='cancel-button'>Cancel</button>
        </div>
    )
}

export default Card;