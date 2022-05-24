import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Banner() {

  return (
    <Box
      sx={{
        height: '90vh',
        bgcolor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'banner 7s infinite alternate'
      }}>
      <Typography variant="h5">
        <b>Mihdi Sijaya Fynn</b>
      </Typography>
    </Box>
  );
}

export default Banner;