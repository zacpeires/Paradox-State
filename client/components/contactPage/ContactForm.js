import React from 'react';

const ContactForm = props => {
  const { name, email, message, handleChange, handleSubmit } = props;

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="contact-form-input-sections">
          <div>Name*</div>
          <textarea
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-input-sections">
          <div>Email*</div>
          <textarea
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-select"> */}
        {/* <div>What are you enquiring about?*</div> */}
        {/* <select onChange={handleChange} value={interestedIn}>
          <option> -</option>
          <option>Lasers</option>
          <option>Lighting</option>
          <option>Projection Mapping</option>
          <option>CGI</option>
        </select> */}
        {/* </div> */}
        <div className="contact-form-input-sections">
          <div>Leave a message</div>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            id="leave-a-message"
          />
        </div>
        <div  className="contact-form-input-sections">
        <button type="submit" disabled={ name && email ? false : true}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
