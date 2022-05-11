import styled from '@mui/system/styled'
import { oneOf } from 'prop-types'

/**
 * @prop {string} direction - The direction of the elements (row, column)
 * @prop {string} justify - The justify content of the elements (flex-start, flex-end, center, space-between, space-around, space-evenly)
 * @prop {string} align - The align content of the elements (flex-start, flex-end, center, baseline, stretch)
 * @prop {string} wrap - The wrap content of the elements (nowrap, wrap, wrap-reverse)
 * @description A flex container component to reduce the amount of code needed to create a flex container
 */
const Flex = styled('div')((props) => ({
  display: 'flex',
  flexDirection: props.direction,
  justifyContent: props.justify,
  alignItems: props.align,
  flexWrap: props.wrap
}))

Flex.propTypes = {
  direction: oneOf(['row', 'column']),
  justify: oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  align: oneOf(['flex-start', 'flex-end', 'center', 'stretch']),
  wrap: oneOf(['nowrap', 'wrap', 'wrap-reverse'])
}

export default Flex
