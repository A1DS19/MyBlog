import React from 'react';
import type { NextPage } from 'next';
import classes from './contact-form.module.css';
import axios from 'axios';

interface ContactFormProps {}

type FormData = {
  email: { value: string };
  name: { value: string };
  message: { value: string };
};

export const ContactForm: NextPage<ContactFormProps> = ({}): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const [sending, setSending] = React.useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { email, message, name } = e.target as typeof e.target & FormData;

    const formData = {
      email: email.value,
      message: message.value,
      name: name.value,
    };

    try {
      setSending(true);
      const { data } = await axios.post('/api/message', formData);

      if (data) {
        setMessage(`Thank you ${data.email}!`);
      }
    } catch (err: any) {
      console.log(err.response);
    } finally {
      setSending(false);
    }
  };

  return (
    <React.Fragment>
      <section className={classes.contact}>
        {!message ? (
          <React.Fragment>
            <h1>How can I help you?</h1>
            <p style={{ textAlign: 'center' }}>
              {sending && 'Sending data, please wait'}
            </p>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes.controls}>
                <div className={classes.control}>
                  <label htmlFor='email'>Your email</label>
                  <input type='email' name='email' id='email' required />
                </div>
                <div className={classes.control}>
                  <label htmlFor='name'>Your name</label>
                  <input type='text' name='name' id='name' required />
                </div>
              </div>
              <div className={classes.control}>
                <label htmlFor='message'>Your message</label>
                <textarea name='message' id='message' cols={30} rows={10} required />
              </div>
              <div className={classes.actions}>
                <button disabled={sending}>Send message</button>
              </div>
            </form>
          </React.Fragment>
        ) : (
          <h2 style={{ textAlign: 'center' }}>{message}</h2>
        )}
      </section>
    </React.Fragment>
  );
};
