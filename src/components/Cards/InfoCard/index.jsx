import PropTypes, { oneOf } from 'prop-types'
import Flex from '../../Flex'
import { StyledCard } from '../cards.styles'

/**
 * @prop {string} label - The key of the card
 * @prop {string} value - The value of the card
 * @prop {string} type - The type of the card (primary, secondary)
 * @description A card specifically for displaying key-value pairs (e.g. Total Words: 10)
 */
const InfoCard = ({ label, value, type, ...rest }) => {
  return (
    <StyledCard {...rest}>
      <Flex justify="center">
        <p>{`${label}: ${value}`}</p>
      </Flex>
    </StyledCard>
  )
}

InfoCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  type: oneOf(['primary', 'secondary'])
}

export default InfoCard
