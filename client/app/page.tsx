import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function Home() {
  return( <div>
    <Box
      component = "form"
      sx = {{ '& >:not(style)':{m:1, width: '25ch'}}}
      noValidate
      autoComplete = "off"
      ><TextField id="standard-basic" label="Enter Ingredients" variant="standard" /></Box>

  </div>
    
  )
}
