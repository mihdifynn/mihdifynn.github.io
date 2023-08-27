import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { ReactElement } from 'react';
import { sxFooter } from '../../extras/styles';




export default function Footer(): ReactElement {

  return (
    <Box
      component="footer"
      sx={sxFooter.parent}
    >
      <Divider />

      <Typography
        variant="body2"
        mt={1}
      >
        &copy; {new Date().getFullYear()} All right reserved. Mihdi Fynn&trade;
      </Typography>
    </Box>
  )
}