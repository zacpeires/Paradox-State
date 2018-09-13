import React, { Component } from 'react'
// import ContactFrom from './ContactForm'

class ContactPage extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
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
        <ContactForm />


      </div>
    )
  }
}

