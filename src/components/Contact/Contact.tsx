import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { ReactElement } from 'react';
import { sxContact } from '../../extras/styles';



export default function Contact(): ReactElement {

  return (
    <Box
      id="contact"
    >
        <Typography
          variant="h5"
          sx={sxContact.title}
        >
          <b>Contact Me</b>
        </Typography>

        <Card>
          <CardContent>
            <Typography
              variant="h6"
            >
              Mihdi Fynn
            </Typography>

            <Box sx={sxContact.iconBox}>
              <LocationOnIcon />

              <Typography
                component="span"
                ml={1}
                color="text.secondary"
              >
                <i>Private</i>
              </Typography>
            </Box>

            <Box sx={sxContact.iconBox}>
              <PhoneIcon />

              <Typography
                component="span"
                ml={1}
                color="text.secondary"
              >
                <i>Private</i>
              </Typography>
            </Box>

            <Box
              sx={sxContact.iconBox}
              mb={1}
            >
              <EmailIcon />

              <Typography
                component="span"
                ml={1}
              >
                mihdi.fynn@gmail.com
              </Typography>
            </Box>

            <Divider />

            <Box mt={1}>
              <IconButton
                sx={sxContact.iconButton}
                disabled
              >
                <PhoneIcon fontSize="large" />
              </IconButton>

              <IconButton
                sx={sxContact.iconButton}
                disabled
              >
                <WhatsAppIcon fontSize="large" />
              </IconButton>

              <IconButton
                sx={{
                  ...sxContact.iconButton,
                  bgcolor: 'primary.main',
                  '&:hover': {
                    color: 'primary.main',
                  }
                }}
                href="mailto:mihdi.fynn@gmail.com"
              >
                <EmailIcon fontSize="large" />
              </IconButton>

              <IconButton
                sx={{
                  ...sxContact.iconButton,
                    bgcolor: '#ff1a75',
                    '&:hover': {
                      color: '#ff1a75'
                    }
                }}
                href="https://instagram.com/mihdi_fynn"
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
    </Box>
  )
}