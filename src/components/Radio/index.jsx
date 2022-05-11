import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

/**
 * @prop {string} direction - The direction of the elements (row, column)
 * @prop {string} size - The size of the elements (small, medium)
 * @prop {string} name - The name of the radio group
 * @prop {string} label - The label of the radio group
 * @prop {string} defaultValue - The default value of the radio group when no value is selected
 * @prop {array} options - The options to be displayed in the radio group ([{label: 'English', value: 'en-t-i0-und}])
 * @prop {function} onChange - The function to be called when the radio group's value changes
 * @description A group of radio elements that allows single selection
 */
const RadioButtons = (props) => {
  const {
    direction = 'column',
    size = 'small',
    name = '',
    label = '',
    defaultValue = '',
    options = [],
    onChange = () => {},
    ...rest
  } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={defaultValue} name={name} {...rest} sx={{ display: 'flex', flexDirection: direction }} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} control={<Radio size={size} />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioButtons.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.oneOf(['small', 'medium']),
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default RadioButtons;
