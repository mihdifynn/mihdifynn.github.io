import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { ReactElement } from 'react';
import { sxWorkCard } from '../../extras/styles';



export interface propTypes {
  name: string;
  link: string | null;
  status: 'Completed' | 'On progress';
  languages: string[]
};

export default function WorkCard(props: propTypes): ReactElement {

  const { name, status, languages, link } = props;

  return (
    <Card sx={sxWorkCard.card}>
      <CardContent>
        <Box sx={sxWorkCard.title}>
          <Typography
            variant="h6"
            component="span"
          >
            <b>{name}</b>
          </Typography>

          <Typography
            sx={sxWorkCard.status}
            component="span"
            variant="body2"
          >
            ({status})
          </Typography>
        </Box>

        <Box
          mb={1}
          ml={0.5}
        >
        { link
          ? (
            <Link
              variant="body2"
              href={`https://${link}`}
              target="_blank"
            >
              {link}
            </Link>
          )
          : (
            <Typography
              component="span"
              variant="body2"
              color="text.secondary"
            >
              <i>No link</i>
            </Typography>
          ) }
        </Box>

      { languages.map((language: string): ReactElement => (
          <Chip
            key={language}
            label={language}
            sx={sxWorkCard.chip}
            color="primary"
          />
        )) }
      </CardContent>
    </Card>
  )
}