import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';
import styles from './BookingAdd.module.css'; 

const BookingAdd = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    room: '',
    payment: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, 'Bookings'), formData);
      alert('Booking registered successfully!');
      navigate('/home'); 
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Booking Management</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="room">Room</label>
        <input
          type="text"
          id="room"
          placeholder="Room Number"
          value={formData.room}
          onChange={handleChange}
          required
        />

        <label htmlFor="payment">Payment</label>
        <input
          type="text"
          id="payment"
          placeholder="Payment Method"
          value={formData.payment}
          onChange={handleChange}
          required
        />

        <button type="submit">Register Booking</button>
      </form>
    </div>
  );
};

export default BookingAdd;

