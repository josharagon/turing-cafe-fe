import React from 'react';
import './Card.css';

const Card = ({name, date, time, numOfGuests}) => {
    return (
        <div className='card'>
            <h2>Name: {name}</h2>
            <h2>Date: {date}</h2>
            <h2>Time: {time}</h2>
            <h2>Guests: {numOfGuests}</h2>
        </div>
    )
}

export default Card;