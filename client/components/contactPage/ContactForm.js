import React from 'react'

const ContactForm = (props) => {
  const { name, email, message, handleChange, handleSubmit } = props

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div>Name*</div>
        <textarea type="text" name="name" value={name} onChange={handleChange}/>
        <div>Email*</div>
        <textarea  type="text" name="email" value={email} onChange={handleChange}/>
        <div className="form-select">
        {/* <div>What are you enquiring about?*</div> */}
        {/* <select onChange={handleChange} value={interestedIn}>
          <option> -</option>
          <option>Lasers</option>
          <option>Lighting</option>
          <option>Projection Mapping</option>
          <option>CGI</option>
        </select> */}
        </div>
        <div>Leave a message</div>
        <textarea type="text" name="message" value={message} onChange={handleChange} id="leave-a-message"/>
        <button type="submit">
        Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
