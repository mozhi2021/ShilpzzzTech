import React from 'react'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import { Paper } from '@mui/material';

function ContactUs() {
  return (

      <Box
        sx={{
          
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 30,
          },
        }}
      >
        <Paper elevation={3}sx={{ m: 10, p: 10 }}>  


        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <h1>Fill the details</h1>
      <TextField fullWidth id="standard-basic" label="Fullname" variant="standard"/>
      <br/>
      <TextField id="standard-basic" label="Email" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Phone number" variant="standard" />
      <br/>
      <TextField id="standard-basic" label="Address" variant="standard" />
    </Box>

    </Paper>
    </Box>
  )
}
  

export default ContactUs;