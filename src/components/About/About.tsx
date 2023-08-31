import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ReactElement } from 'react';
import { sxAbout } from '../../extras/styles';



export default function About(): ReactElement {

  return (
    <Box
      id="about"
    >
      <Typography
        variant="h5"
        sx={sxAbout.title}
      >
        <b>About Me</b>
      </Typography>

      <Typography>
        &nbsp;&nbsp;&nbsp;&nbsp;I am a self taught full stack web developer. I am capable of using html, css, javascript, typescript and python. I mostly use nextjs, but i am capan=ble of using flask as well. I use mongodb for the database, but i am also capable of using postgresql. Hit me up if you are interested to work with me.
      </Typography>
    </Box>
  )
}