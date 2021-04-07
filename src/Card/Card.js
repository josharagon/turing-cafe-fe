import React from 'react';
import './Card.css';

const Card = ({name, date, time, numOfGuests}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h2>{date}</h2>
            <h2>{time}</h2>
            <h2>{numOfGuests}</h2>
        </div>
    )
}

export default Card;