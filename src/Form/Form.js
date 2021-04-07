import React, { Component } from 'react'
import './Form.css'


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0,
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    clearInputs = () => {
       this.setState( { name: '',  date: '', time: '', number: 0} )
    }

    handleSubmit(event) {
        event.preventDefault();
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newReservation);
        this.clearInputs()
    }
    
    render() {
        return (
            <form>
                <input type='text' name='name' onChange={event => this.handleChange(event)} placeholder='Name'></input>
                <input type='text' name='date' onChange={event => this.handleChange(event)} placeholder='Date'></input>
                <input type='text' name='time' onChange={event => this.handleChange(event)} placeholder='Time'></input>
                <input type='number' name='number' onChange={event => this.handleChange(event)} placeholder='Number of Guests'></input>
                <button className='new-button' onClick={event => this.handleSubmit(event)}>Make Reservation</button>
            </form>
        )
    }
}

export default Form;