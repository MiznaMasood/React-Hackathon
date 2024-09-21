import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../Config/firebase';
import styles from './CustomerAdd.module.css'; 

const CustomerAdd = () => {
  const [formData, setFormData] = useState({
    Name: '',
    
    Phone: '',
    
    Address: '',
    
    email: '',
  
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
      await addDoc(collection(database, 'Customers'), formData);
      alert('Customer registered successfully!');
      navigate('/home'); 
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Customer Management</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name"> Name</label>
        <input
          type="text"
          id="Name"
          placeholder=" Name"
          value={formData.Name}
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

<label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
       
        />

<label htmlFor="Address">Adress</label>
        <textarea
          id="Address"
          placeholder="Adress"
          value={formData.Address}
          onChange={handleChange}
          required
          cols="30"
          rows="5"
        />
        <button type="submit">Register Customer</button>
      </form>
    </div>
  );
};

export default CustomerAdd;

