import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Typography } from '@mui/material';

const RadioButtonComponent = ({ value, onChange }) => {
  return (
    <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
      <Typography variant="h6">Choose an Option</Typography>
      <RadioGroup value={value} onChange={onChange}>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonComponent;
