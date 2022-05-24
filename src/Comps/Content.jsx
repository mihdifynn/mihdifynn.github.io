import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState, Fragment } from 'react';


function TabPanel(props) {

  const { children, value, index } = props;

  return (
    <Fragment>
      {index === value && children}
    </Fragment>
  );
}


function Content() {

  // name, href, disabled
  const projects = [ 
    [
      'Queenbaca',
      'https://queenbaca.com',
      false
    ], [
      'Reza (private)',
      'https://rezapatricia.queenbaca.com',
      true
    ], [
      'ESparring backend (unfinished)',
      'https://esparring.herokuapp.com',
      true
    ], [
      'Survey website for a college student\'s final exam (private)',
      'https://mihdifynn.herokuapp.com/?sk=1',
      true
    ], [
      'Biru Aviation Training Center (On progress)',
      'https://biru-tc.herokuapp.com',
      false
    ], [
      'Unnamed (On progress)',
      '',
      true
    ]
  ]

  const [value, setValue] = useState(0);

  return (
    <Box>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider'
        }}>
        <Tabs
          onChange={(e, newValue) => setValue(newValue)} value={value}>
          <Tab label="My Projects" />
          <Tab label="Contact Me" />
        </Tabs>
      </Box>
      <Box sx={{ minHeight: 250 }}>
        <TabPanel value={value} index={0}>
          <Box>
            <List>
              {projects.map((project, i) => (
                <ListItem
                  key={project[0]}
                  onClick={() => window.location.href = project[1]}
                  disabled={project[2]}
                  divider
                  button>
                  <ListItemText
                    primary={project[0]}
                    secondary={!project[2] && project[1]} />
                </ListItem>
              ))}
            </List>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box>
            Page 2
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default Content