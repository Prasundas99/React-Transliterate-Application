import { Box } from '@mui/material'
import Transliterator from '../../components/Transliterator'

/**
 * - The Translate page component
 * @returns {JSX.Element} The Translate page
 */
const Translate = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Transliterator />
    </Box>
  )
}

export default Translate
