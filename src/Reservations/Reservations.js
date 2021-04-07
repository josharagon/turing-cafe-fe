import React from 'react';
import './Reservations.css'
import Card from '../Card/Card.js'

const Reservations = ({bookings}) => {

    const reservationCards = bookings.map(reservation => {
        return (
            <Card 
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            numOfGuests={reservation.number}
            id={reservation.id}
            key={reservation.id}
            />
        )
    })
    return (
        <div className='reservation-cards'>
            {reservationCards}
        </div>
    )
}

export default Reservations;