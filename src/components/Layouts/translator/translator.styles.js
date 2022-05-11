import { Paper } from '@mui/material';
import styled from '@mui/system/styled';
import Flex from 'components/flex';

export const RootContainer = styled(Paper)((props) => ({
  background: '#1ab27333',
  borderRadius: props.theme.shape.borderRadius,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  marginBottom: '2rem',
  padding: '1rem',
  [props.theme.breakpoints.up('md')]: {
    marginLeft: props.theme.spacing(10),
    marginRight: props.theme.spacing(10),
  },
}));

export const Header = styled(Paper)((props) => ({
  background: '#1ab27366',
  textAlign: 'center',
  height: '5rem',
  marginTop: '1rem',
  marginBottom: '1.5rem',
  '& > div': {
    height: '100%',
    overflowX: 'auto',
    justifyContent: 'flex-start',
    padding: '0 1rem',
    [props.theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  '& p': {
    fontSize: '1.2rem',
  },
  '& button:not(:last-child)': {
    marginRight: '1rem',
  },
}));

export const CardsContainer = styled(Flex)((props) => ({
  flexWrap: 'wrap',
  marginTop: '1rem',
  '& *:not(:last-child)': {
    marginRight: '1rem',
    [props.theme.breakpoints.up('md')]: {
      marginRight: '1rem',
    },
  },
  [props.theme.breakpoints.down('md')]: {
    '& button': {
      width: 'calc(33.33% - 1rem)',
    },
    '& > div': {
      width: 'calc(50% - 1rem)',
    },
  },
}));
