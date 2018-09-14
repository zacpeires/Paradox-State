import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class ContactPage extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      interestedIn: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

     console.log(this.state)
  }


  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {

    return (
      <div>
        <ContactForm name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
        interestedIn={this.state.interestedIn}/>
      </div>
    )
  }
}

