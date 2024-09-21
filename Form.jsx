import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputComponent from './InputComponent';

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: '20px',
        maxWidth: '500px',
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Basic Form
      </Typography>
      <InputComponent
        label="Name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        name="name"
      />
      <InputComponent
        label="Email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        name="email"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default FormComponent;
