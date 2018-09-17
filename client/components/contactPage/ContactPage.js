import React, { Component } from 'react'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'
import { gotNewEnquiry } from '../../store'
import './contact-form.css'

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

  // OnSubmit of form should trigger a change of state, that shows a thank you message. Use a ternary expression

  render() {

    return (
      <div className="contact-page-container">
        <div className="contact-form-text">
          <h3>Contact us</h3>
          <div>If you have any questions regarding a project, get in touch</div>
        </div>
        <ContactForm name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <video src="./media/anubis-dance-SNAKE_1.mp4" autoPlay loop/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  gotNewEnquiry: (enquiry) => dispatch(gotNewEnquiry(enquiry))
})

export default connect(null, mapDispatchToProps)(ContactPage)
