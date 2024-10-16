import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './pages.module.css';



const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm('service_8760sm9', 'contact_form', form.current, {
      publicKey: 'qjjJzQMPuLOVL_gnn',
    })
      .then(() => {
        console.log('SUCCESS!');
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
<div className={styles.container}>
  <h1>Contact</h1>
  <Form ref={form} onSubmit={sendEmail} className={styles.form}>
         <input type="hidden" name="contact_number" value="697483"/>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
  
    <Button type="submit" disabled={isSubmitting} className={styles.button}>
       {isSubmitting ? 'Sending...' : 'Send'}</Button>
       </Form>
   {submitStatus === 'success' && (
     <p>Message sent</p>
   )}
   {submitStatus === 'error' && (
     <p>Failed to send message. Please try again.</p>
   )}
 
    </div>
    <div className={styles.tilted}>
      1
  </div>
  <div className={styles.card}>
    card
    </div>



  </>
  );
};

export default Contact;