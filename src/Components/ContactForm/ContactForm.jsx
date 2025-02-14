import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_aa2zuku','template_ul0xvip', e.target,'clFOhYT1S9lZI6-ck')
    .then(
      () => {
        setLoading(false);
        alert("Dziękuje za wiadomość, odpowiemy tak szybko jak potrafimy :)");
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Coś poszło nie tak. Sprawdź jeszcze raz.");
      }
    );
  }

  return (
    <div className="contact-form-container">
        <div className="contact-info">
          <span className="">Masz sprawę?</span>
        </div>
        <form
          onSubmit={sendEmail}
          className='contact-labels'
        >
          <label className='contact-label'>
            <span className='text-white font-medium mb-4'>Twój e-mail</span>
            <input
              type='email'
              name='email_from'
              placeholder="Podaj swój e-mail"
              className='contact-input'
              required
            />
            <button
            type='submit'
            variants='contained'
            className='contact-input'
          >
          {loading ? "Wysyłanie..." : "Wyślij"}
          </button>
          </label>
          <label className='contact-label'>
            <span className='text-white font-medium mb-4'>Twoja wiadomość</span>
            <textarea
              rows={6}
              name='message'
              id="message"
              placeholder='...'
              className='contact-input'
              required
            />
          </label>
        </form>
    </div>
  );
};

export default ContactForm
