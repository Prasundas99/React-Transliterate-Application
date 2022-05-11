import MuiAutocomplete from '@mui/material/Autocomplete'
import styled from '@mui/system/styled'

/**
 * @description
 * - The fontSize of the label in the dropdown is from referenced theme.typography.body1.fontSize
 * - We can override it by changing the fontSize property for the Autocomple component.
 * - fontSize is set to theme.typography.body1.fontSize which is also the default (if not set explicitly).
 * - Try changing it to see the effects.
 */
const Autocomplete = styled(MuiAutocomplete)((props) => ({
  height: 'fit-content',
  '& .MuiAutocomplete-endAdornment': {
    top: '50%',
    transform: 'translateY(-50%)'
  },
  '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
    fontSize: props.theme.typography.body1.fontSize
  }
}))

/**
 * @description
 * - The fontSize of each option in the dropdown is from referenced theme.typography.body1.fontSize
 * - We can override it by changing the fontSize property for the Option component.
 */
export const Option = styled('li')((props) => ({
  fontSize: props.theme.typography.body1.fontSize
}))

Autocomplete.propTypes = {}

Autocomplete.defaultProps = {}

export default Autocomplete
