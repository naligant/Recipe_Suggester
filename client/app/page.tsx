import Image from "next/image";
import * as React from 'react';
import Link from 'next/link'; // Corrected import
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Title</h1>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
        style={{ textAlign: 'center' }}
      >
        <TextField id="standard-basic" label="What ingredients do you have" variant="standard" />
      </Box>
      <div style={{ textAlign: 'center' }}> {/* Centering the link */}
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
