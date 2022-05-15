import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export function Header() {

  return (
    <Box component="nav">
      <AppBar position="static" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6">
              Mihdi Fynn
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}


export function Footer() {

  return (
    <Box sx={{ bgcolor: 'primary.dark', p: 1, textAlign: 'center' }} component="footer">
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Mihdi Sijaya Fynn&trade;
      </Typography>
    </Box>
  );
}