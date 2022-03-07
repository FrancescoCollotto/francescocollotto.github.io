import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({downIcon}) => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [show, setShow] = useState({
    success: false,
    danger: false,
  });

  const successMessage = show.success ? (<div className="alert alert-success alert-dismissible" role="alert">
    <strong>Email sent!</strong> I'll always try to get back to you within 24 hours.
    <button type="button" className="btn-close" onClick={() => setShow({...show, success: false})} aria-label="Close"></button></div>) : '';

  const failureMessage = show.danger ? (<div className="alert alert-danger alert-dismissible" role="alert">
    <strong>Something went wrong..</strong> Please try again later.
    <button type="button" className="btn-close" onClick={() => setShow({...show, danger: false})} aria-label="Close"></button></div>) : '';

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('personal_contact', 'contact_form', form.current, '9ErHPkV_KcbJaCdns')
      .then((result) => {
          console.log(result.text);
          setShow({...show, success: true})
      }, (error) => {
          console.log(error.text);
          setShow({...show, danger: true})
      });

      setToSend({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      })
  };

  return (
    <div className='my-4'>
      {successMessage}
      {failureMessage}
      <div className='text-center'>
        <i>{downIcon}</i>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input type="text" name="user_name" id='name' className='form-control' placeholder='Your name' onChange={handleChange} value={toSend.user_name} required/>
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type="email" name="user_email" id='email' className='form-control' placeholder='Your email' onChange={handleChange} value={toSend.user_email} required/>
        </div>
        <div className='mb-3'>
          <label htmlFor='subject' className='form-label'>Subject</label>
          <input type="text" name="subject" id='subject' className='form-control' placeholder='Add subject' onChange={handleChange} value={toSend.subject} required/>
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>Message</label>
          <textarea name='message' id='message' className='form-control' placeholder='Message here...' rows="5" onChange={handleChange} value={toSend.message} required/>
        </div>
        
        <input type="submit" className="btn btn-outline-light" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
