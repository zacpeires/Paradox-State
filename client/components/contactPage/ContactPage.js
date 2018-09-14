import React, { Component } from 'react'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'
import { gotNewEnquiry } from '../../store'

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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();

    this.props.gotNewEnquiry(this.state)

    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render() {

    return (
      <div>
        <ContactForm name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  gotNewEnquiry: (enquiry) => dispatch(gotNewEnquiry(enquiry))
})

export default connect(null, mapDispatchToProps)(ContactPage)
