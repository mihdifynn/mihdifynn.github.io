import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import { sxParent } from './extras/styles';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ReactElement } from 'react';



export default function App(): ReactElement {

  // const test = (): number => {
  //   console.log('string')
  //   return 1
  // }

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
      <Box sx={sxParent}>
        <Header />

        <Banner />

        <Container maxWidth="md">
          <Projects />

          <About />

          <Contact />
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  )
}