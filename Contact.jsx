
// src/Screens/Contact.jsx
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
    <Navbar />
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
    <Footer />
    </>
  );
};

export default Contact;
