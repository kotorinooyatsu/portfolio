import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ width: '100%', py: '5%', textAlign: 'center', bgcolor: '#4db6ac' }}>
      <Typography variant="h3" color="white" gutterBottom>
        Haruka Nishio's Portfolio
      </Typography>
      <Typography variant="h5" color="white">
        Web engineer
      </Typography>
    </Box>
  );
}
