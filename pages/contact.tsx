import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';

const ContactPage: NextPage = (): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='Send me a message, if you want to...' />
      </Head>
      <ContactForm />
    </React.Fragment>
  );
};

export default ContactPage;
