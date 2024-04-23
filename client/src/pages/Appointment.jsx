import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/appointment.css';

function Appointment() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [problem, setProblem] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    if (!type.trim()) {
      alert('Please select a service type');
      return;
    }

    if (!date.trim()) {
      alert('Please select a date');
      return;
    }

    if (!time.trim()) {
      alert('Please select a time');
      return;
    }

    if (!problem.trim()) {
      alert('Please describe the problem');
      return;
    }

    axios
      .post('https://laptop-service-backend.onrender.com/appointment', { email, phone, type, date, time, problem })
      .then((result) => {
        console.log(result);
        if (result.data === 'added') {
          navigate('/home');
        } else {
          alert("You don't have an account. Please Signup.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="appointment-container">
      <h1>Laptop Service Appointment</h1>

      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />

        {/* phone */}
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} />

        {/* service type */}
        <label htmlFor="type">Service Type:</label>
        <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Service Type</option>
          <option value="Diagnostic and Repair">Diagnostic and Repair</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Upgrade">Upgrade</option>
          <option value="Data Recovery">Data Recovery</option>
          <option value="Consultation">Consultation</option>
          <option value="Accessories and Parts">Accessories and Parts</option>
        </select>

        {/* date */}
        <label htmlFor="date">Preferred Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />

        {/* time */}
        <label htmlFor="time">Preferred Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />

        {/* problem */}
        <label htmlFor="problem">Problem Description:</label>
        <input type="text" id="problem" name="problem" onChange={(e) => setProblem(e.target.value)} />
        <br />

        <button type="submit">Send a Request</button>
      </form>
    </div>
  );
}

export default Appointment;
