import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ReactElement } from 'react';
import { sxBanner } from '../../extras/styles';



export default function Banner(): ReactElement {

  return (
    <Box sx={sxBanner.parent}>
      <div>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          <b>Hello, I'm</b>
        </Typography>

        <Typography
          variant="h3"
          color="primary.dark"
        >
          <b>Mihdi Fynn</b>
        </Typography>
      </div>
    </Box>
  )
}