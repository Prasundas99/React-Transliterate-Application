import MuiButton from '@mui/material/Button'
import styled from '@mui/system/styled'
import { oneOf } from 'prop-types'
import { customButtonStyles } from './button.styles'

/**
 * @prop {string} type - The type of the button (primary, secondary)
 * @description Custom button component derived from MUI Button
 */
const Button = styled(MuiButton)((props) => ({
  ...customButtonStyles[props.type](props.theme),
  textTransform: 'none',
  fontWeight: '400',
  fontSize: '1rem'
}))

Button.propTypes = {
  type: oneOf(['primary', 'secondary'])
}

Button.defaultProps = {
  type: 'primary'
}

export default Button
