import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

import HeroImg from '../../assets/hero.svg'


export default function Home() {
  return (
      <Box>
    <Container maxWidth="xl">
      <Grid container>
        <Grid item md={7}>
          <Typography variant="h5">
            Type in English and select particular language and do Transliteration to Get result
            text in specific language
          </Typography>
          <br /> <br /> <br />
          <Link to={'/translate'}>
            <Button variant="outlined" color="primary">
              Demo
            </Button>
          </Link>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={4}>
          <img src={HeroImg} alt="logo" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}
