import React from 'react';
import { Button } from '@mui/material';

const SimpleButtonComponent = ({ text, onClick, color = 'primary' }) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      sx={{ borderRadius: '8px', padding: '10px 20px', fontSize: '16px' }}
    >
      {text}
    </Button>
  );
};

export default SimpleButtonComponent;
