import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'
import Reservations from '../Reservations/Reservations.js'

import { fetchReservations } from '../APICalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookings: []
    }
  }

  componentDidMount = () => {
    fetchReservations()
    .then(data => this.setState({ bookings: data }))
    .catch(error => this.setState({ error: error.message }))
  }

  addReservation = (newReservation) => {
    this.setState({bookings: [...this.state.bookings, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='reservation-form'>
          <Form addReservation={this.addReservation}/>
        </div>
          <Reservations bookings={this.state.bookings}/>
      </div>
    )
  }
}

export default App;
