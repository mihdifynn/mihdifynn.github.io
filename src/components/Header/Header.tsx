import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import MenuIcon from '@mui/icons-material/Menu';

import { sxHeader } from '../../extras/styles';
import Drawer from './Drawer';
import { useState, ReactElement } from 'react';



export default function Header(): ReactElement {

  const navItems: string[] = ['work', 'about', 'contact'];

  const [open, setOpen] = useState<boolean>(false);

  const scrolled: boolean = useScrollTrigger();

  return (
    <Box>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        color={
          scrolled
          ? 'inherit'
          : 'transparent'
        }
      >
        <Container maxWidth="md">
          <Toolbar>
            <IconButton
              sx={sxHeader.iconButton}
              onClick={(): void => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={sxHeader.logo}
            >
              <b>Mihdi Fynn</b>
            </Typography>

            <Box sx={sxHeader.largeItems}>
            { navItems.map((item: string): ReactElement => (
                <Button
                  key={item}
                  color="inherit"
                  href={`#${item}`}
                >
                  {item}
                </Button>
              )) }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={open}
        handleClose={(): void => setOpen(false)}
        navItems={navItems}
      />
    </Box>
  )
}