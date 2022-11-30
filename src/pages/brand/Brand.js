import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Hero from './components/Hero'
import Footer from '../../layouts/footer/Footer'
import { Container } from './styles/Container.styled'
import { Grid } from '@mui/material'
import { Item1, Item2,Item3, Item4, Item5, Item6,Item7, Item8, Item9 } from './styles/Items.styled'
import Slider from '../../layouts/slider/Slider'
import { productsData, productsData2 } from '../../data/sliderData'
import { samsungHero } from '../../data/brandsData'

const Brand = () => {

  const {theme} = useContext(Context)

  const heroData = samsungHero;

  return (
    
    <StyledContainer theme={theme}>
        <Header />
        <Hero 
        background={heroData.background}
        logo={heroData.logo}
        />
        <Container theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Item1 url={'../../../../images/samsung-1.jpg'}></Item1>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item2 url={'../../../../images/samsung-8.jpg'}></Item2>
              <br></br>
              <Item3 url={'../../../../images/samsung-2.jpg'}></Item3>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item4 url={'../../../../images/samsung-4.jpg'}></Item4>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item5 url={'../../../../images/samsung-5.jpg'}></Item5>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item6 url={'../../../../images/samsung-6.jpg'}></Item6>
              <br></br>
              <Item9 url={'../../../../images/samsung-9.jpg'}></Item9>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item7 url={'../../../../images/samsung-7.jpg'}></Item7>
            </Grid>
            <Grid item xs={12}>
              <Item8 url={'../../../../images/samsung-10.webp'}></Item8>
            </Grid>
          </Grid>
          <Slider title={'newest products'} data={productsData2} />
          <Slider title={'popular products'} data={productsData} />
        </Container>  
        <Footer width={'100%'} />
    </StyledContainer>
        
  )
}

export default Brand