import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Hero from './components/Hero'
import Footer from '../../layouts/footer/Footer'
import { Container } from './styles/Container.styled'
import { Grid } from '@mui/material'

const Brand = () => {

  const {theme} = useContext(Context)


  return (
    
    <StyledContainer theme={theme}>
        <Header />
        <Hero />
        <Container theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div style={{border:'solid 1px blue'}}></div>
            </Grid>
          </Grid>
        </Container>  
        <Footer width={'100%'} />
    </StyledContainer>
        
  )
}

export default Brand