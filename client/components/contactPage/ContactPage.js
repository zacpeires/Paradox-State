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

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit() {
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {

    return (
      <div>
        <ContactForm name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.state.handleChange} handleSubmit={this.state.handleSubmit}
        interestedIn={this.state.interestedIn}/>
      </div>
    )
  }
}

