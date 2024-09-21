import React from 'react';
import { TextField } from '@mui/material';

const InputComponent = ({ label, value, onChange, type = "text" }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
      variant="outlined"
      sx={{ marginBottom: '20px' }}
    />
  );
};

export default InputComponent;
