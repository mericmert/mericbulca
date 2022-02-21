import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyfd0rc",
        "contact_form",
        form.current,
        "user_WqLWPcNMNQuJeNGTIMrMI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message succesfully sent!')
        },
        (error) => {
          console.log(error.text);
          alert('Error, your message could not be sent')
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>FULL NAME</label>
      <input type="text" name="name" />
      <label>EMAIL</label>
      <input placeholder="example@gmail.com" type="email" name="email" />
      <label>MESSAGE</label>
      <textarea name="message" />
      <input id="submit-btn" type="submit" value="Send" />
    </form>
  );
}
