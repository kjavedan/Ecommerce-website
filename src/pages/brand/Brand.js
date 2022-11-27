import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Hero from './components/Hero'
import Footer from '../../layouts/footer/Footer'
import { Container } from './styles/Container.styled'
import { Grid } from '@mui/material'
import { Item1, Item2,Item3, Item4, Item5, Item6,Item7, Item8 } from './styles/Items.styled'

const Brand = () => {

  const {theme} = useContext(Context)


  return (
    
    <StyledContainer theme={theme}>
        <Header />
        <Hero />
        <Container theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Item1></Item1>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item2></Item2>
              <br></br>
              <Item3></Item3>
            </Grid>
        
            <Grid item xs={12} lg={6}>
              <Item4></Item4>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item5></Item5>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item6></Item6>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item7></Item7>
            </Grid>
            <Grid item xs={12}>
              <Item8></Item8>
            </Grid>
          </Grid>
        </Container>  
        <Footer width={'100%'} />
    </StyledContainer>
        
  )
}

export default Brand