import React from 'react';
import './App.css';

function App() {
  return (
<div class="form-container">
      <form class="register-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          id="age"
          class="form-field"
          type="number"
          placeholder="Age"
          name="age"
        />
        <input
          id="Adress"
          class="form-field"
          type="text"
          placeholder="Adress"
          name="Adress"
        />
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          id="Phone Number"
          class="form-field"
          type="Number"
          placeholder="Phone Number"
          name="Phone Number"
        />
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
