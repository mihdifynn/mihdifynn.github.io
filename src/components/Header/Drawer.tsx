import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { ReactElement } from 'react';
import { sxDrawer } from '../../extras/styles';



interface Props {
  open: boolean;
  handleClose: () => void;
  navItems: string[];
}

export default function MyDrawer(props: Props): ReactElement {

  const { open, handleClose, navItems } = props;

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      anchor="left"
      sx={sxDrawer.drawer}
    >
      <Box
        sx={sxDrawer.main}
      >
        <Typography
          variant="h6"
          component="div"
          sx={sxDrawer.logo}
        >
          Mihdi Fynn
        </Typography>

        <Divider />

        <List onClick={handleClose}>
        { navItems.map((item: string): ReactElement => (
            <ListItem
              key={item}
              onClick={(): void => {
                window.location.href = `#${item}`
              }}
              button
            >
              <ListItemText primary={item} />
            </ListItem>
          )) }
        </List>
      </Box>
    </Drawer>
  )
}