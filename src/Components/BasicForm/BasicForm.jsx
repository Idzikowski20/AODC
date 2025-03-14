import React, { useState } from 'react';

const BasicForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Funkcja walidująca dane
  const validateForm = () => {
    if (!name || !email || !message || !phone) {
      setError('Wszystkie pola muszą być wypełnione!');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Proszę podać poprawny adres email!');
      return false;
    }
    
    const phoneRegex = /^[0-9]{9}$/; // Sprawdzanie czy numer ma 9 cyfr
    if (!phoneRegex.test(phone)) {
      setError('Proszę podać poprawny numer telefonu!');
      return false;
    }
    
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Walidacja formularza
    if (!validateForm()) {
      return;
    }

    // Wysyłanie danych do Formcarry
    fetch("https://formcarry.com/s/7ZnYFz8RZSh", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setSuccess(true);
        alert("Otrzymaliśmy Twoje zgłoszenie, dziękujemy!");
      }
      else if(response.code === 422){
        setError('Wystąpił błąd walidacji danych.');
      }
      else {
        setError('Wystąpił błąd przy przesyłaniu danych.');
      }
    })
    .catch(error => {
      setError(error.message || 'Wystąpił błąd sieciowy');
    });
  }

  return (
    <div className='formcarry-container'>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Formularz został wysłany pomyślnie!</div>}

      <form onSubmit={(e) => onSubmit(e)}>

        <div className="formcarry-block">
          <label htmlFor="name">Imię i nazwisko</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Imię i nazwisko" />
        </div>
    
        <div className="formcarry-block">
          <label htmlFor="email">Twój adres email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Przykład@email.com" />
        </div>

        <div className="formcarry-block">
          <label htmlFor="phone">Numer telefonu</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Numer telefonu" />
        </div>
    
        <div className="formcarry-block">
          <label htmlFor="message">Twoja wiadomość</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Wiadomość..."></textarea>
        </div>
    
        <div className="formcarry-block">  
          <button type="submit">Wyślij</button>
        </div>
      </form>
    </div>
  );
}

export default BasicForm;
