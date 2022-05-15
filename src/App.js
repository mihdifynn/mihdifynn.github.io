import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import { Header, Footer } from './Comps/Components.jsx';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: blue[900]
      }
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ height: '100vh', bgcolor: 'primary.dark', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h5">
            BANNER
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Typography sx={{ p: 3, borderBottom: 2 }} variant="h6">My Apps</Typography>
          <Box sx={{ p: 3 }}>
            <Button href="/budgetAccountant" variant="contained">Budget Tracker</Button>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;