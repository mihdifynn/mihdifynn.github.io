import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header, Footer } from './Comps/Components.jsx';
import Banner from './Comps/Banner.jsx';
import Content from './Comps/Content.jsx';

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
      <Box
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh'
        }}>
        <Header />
        <Banner />
        <Container maxWidth="md">
          <Content />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;