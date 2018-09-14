import React from 'react'

const ContactForm = (props) => {
  const { name, email, message, handleChange, handleSubmit, interestedIn } = props

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div>Name</div>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <div>Email</div>
        <input type="text" name="email" value={email} onChange={handleChange}/>
        <div>Leave a message</div>
        <input type="text" name="message" value={message} onChange={handleChange} id="leave-a-message"/>
        <button type="submit">
        Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
