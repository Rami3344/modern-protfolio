import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <hr />
      <div className="inputs">
        <p>Full Name:</p>
        <input type="text" placeholder="Full Name" />
        <p>Phone Number:</p>
        <input type="number" placeholder="Phone Number" />
        <p>E-Mail:</p>
        <input type="email" placeholder="E-Mail" />
        <p>Message</p>
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          cols="20"
          rows="5"
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
