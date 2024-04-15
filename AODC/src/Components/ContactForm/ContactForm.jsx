import React, { useState } from 'react';

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/IMcEpQS-Erb", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("Otrzymaliśmy twoje zapytanie. Dziękujemy!");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }


  return (
<section class="formcarry-container">
  <form action="https://formcarry.com/s/IMcEpQS-Erb" method="POST" enctype="multipart/form-data">
    
    <div class="formcarry-block">
      <label for="fc-generated-1-name">Imię i Nazwisko</label>
      <input type="text" name="name" id="fc-generated-1-name" placeholder="Jak się nazywasz?" />
    </div>
  	
    <div class="formcarry-block">
      <label for="fc-generated-1-email">Twój Adres E-mail</label>
      <input type="email" name="email" id="fc-generated-1-email" placeholder="twoj-email@gmail.com" />
    </div>
  	
    <div class="formcarry-block">
      <label for="fc-generated-1-message">Wiadomość</label>
      <textarea name="text" name="message" id="fc-generated-1-message" placeholder="Wpisz tutaj wiadomość..."></textarea>
    </div>
  	
    <div class="formcarry-block">  
      <button type="submit"></button>
    </div>
  
  </form>
</section>
  )
}