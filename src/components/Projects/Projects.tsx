import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ReactElement } from 'react';
import { sxWork } from '../../extras/styles';
import WorkCard, { propTypes as workTypes } from '../WorkCard';



export default function Projects(): ReactElement {

  const workList: workTypes[] = [{
    name: 'Queenbaca',
    link: null,
    status: 'Completed',
    languages: ['html', 'css', 'javascript', 'reactjs', 'nextjs', 'mongodb']
  }, {
    name: 'Biru Aviation Training Center',
    link: 'biru-tc.com',
    status: 'Completed',
    languages: ['html', 'css', 'javascript', 'reactjs', 'python', 'flask']
  }, {
    name: 'Esparring (backend)',
    link: null,
    status: 'On progress',
    languages: ['javascript', 'typescript', 'nextjs', 'mongodb']
  }, {
    name: 'Hidden Name',
    link: null,
    status: 'On progress',
    languages: ['html', 'css', 'javascript', 'typescript', 'reactjs', 'nextjs', 'mongodb']
  }]

  return (
    <Box
      id="work"
    >
      <Typography
        variant="h5"
        sx={sxWork.title}
      >
        <b>My Projects</b>
      </Typography>

      <Box sx={sxWork.content}>
      { workList.map((workObject: workTypes, i: number): ReactElement => (
          <WorkCard
            key={i}
            {...workObject}
          />
        )) }
      </Box>
    </Box>
  )
}