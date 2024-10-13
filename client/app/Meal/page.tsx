"use client"; // Mark the file as a client component

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function CenteredBoxPage() {
  const [leftInput, setLeftInput] = React.useState('');
  const [rightInput, setRightInput] = React.useState('');
  const [marginTop, setMarginTop] = React.useState('auto'); // Initial margin (centered)
  const [boxHeight, setBoxHeight] = React.useState('300px'); // Initial height

  // Function to handle button click
  const handleClick = () => {
    setMarginTop('20px'); // Move the box to the top of the screen
    setBoxHeight('150px'); // Reduce the height by half
  };

  return (
    <Box
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Position relative for the centered box
        flexDirection: 'column', // Allow vertical stacking
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%', // Keep the width static
          maxWidth: '600px', // Max width remains the same
          height: boxHeight, // Dynamic height for shrinking
          borderRadius: '8px', // Rounded corners
          padding: 2,
          margin: 'auto',
          marginTop: marginTop, // Dynamic margin for moving to the top
          textAlign: 'center',
          backgroundColor: '#ffffff', // Custom background color
          boxShadow: 5, // Drop shadow from Material-UI theme
        }}
      >
        <Box sx={{ display: 'flex', width: '100%', mb: 2 }}>
          <TextField
            variant="outlined"
            label="Left Input"
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)} // Update state on change
            sx={{ flex: 1, mr: 1 }} // Margin right for spacing
          />
          <TextField
            variant="outlined"
            label="Right Input"
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)} // Update state on change
            sx={{ flex: 1 }} // Take equal space
          />
        </Box>
        <Button variant="contained" color="primary" onClick={handleClick} sx={{ mt: 2 }}>
          Click Me
        </Button>
      </Box>
    </Box>
  );
}
