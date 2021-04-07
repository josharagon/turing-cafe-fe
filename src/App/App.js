import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js'

const bookings = [{"id":1,"name":"Christie","date":"12/29","time":"7:00","number":12},{"id":2,"name":"Leta","date":"4/5","time":"7:00","number":2},{"id":3,"name":"Pam","date":"1/21","time":"6:00","number":4}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations bookings={bookings}/>
        </div>
      </div>
    )
  }
}

export default App;
