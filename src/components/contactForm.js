import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('personal_contact', 'contact_form', form.current, '9ErHPkV_KcbJaCdns')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setToSend({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      })
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Your name' onChange={handleChange} value={toSend.user_name} />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Your email' onChange={handleChange} value={toSend.user_email} />
      <label>Subject</label>
      <input type="text" name="subject" placeholder='Subject' onChange={handleChange} value={toSend.subject} />
      <label>Message</label>
      <textarea name="message" placeholder='message here...' onChange={handleChange} value={toSend.message} />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;