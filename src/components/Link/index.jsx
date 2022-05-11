import { Link as RouterLink } from 'react-router-dom';
import styled from '@mui/system/styled';
import PropTypes from 'prop-types';

/**
 * @prop {string} active - Specifies whether the link is active or not
 * @description Custom link component derived from React Router Dom Link
 */
const Link = styled(RouterLink)((props) => ({
  textDecoration: 'none',
  color: props.active === 'true' ? props.theme.palette.primary.main : props.theme.palette.text.primary,
  fontSize: '1.2rem',
  ':hover': {
    color: props.theme.palette.primary.main,
  },
}));

Link.propTypes = {
  active: PropTypes.string,
};

export default Link;
