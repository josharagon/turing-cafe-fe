import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.myTime = React.createRef();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }



    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    clearInputs = () => {
        this.setState({ name: '', date: '', time: '', number: '' })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newReservation);
        this.clearInputs();
    }

    render() {
        return (
            <form>
                <input type='text' name='name' onChange={event => this.handleChange(event)} placeholder='Name' value={this.state.name} required />
                <input type='text' name='date' onChange={event => this.handleChange(event)} placeholder='Date' value={this.state.date} required />
                <input type='text' name='time' onChange={event => this.handleChange(event)} placeholder='Time' value={this.state.time} required />
                <input type='number' name='number' onChange={event => this.handleChange(event)} placeholder='Number of guests' value={this.state.number} required />
                <button className='new-button' onClick={event => this.handleSubmit(event)}>Make Reservation</button>
            </form>
        )
    }
}

export default Form;