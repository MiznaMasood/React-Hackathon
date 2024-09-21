import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const IconButtonComponent = ({ action, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton color={action === 'delete' ? 'error' : 'primary'}>
        {action === 'delete' ? <Delete /> : <Edit />}
      </IconButton>
    </Tooltip>
  );
};

export default IconButtonComponent;
