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
import { appleHero, appleShowcase, microsoftHero, micorsoftShowcase, dellHero, dellShowcase, hpHero, hpShowcase, samsungHero, samsungShowcase, sonyHero, sonyShowcase, lenovoHero, lenovoShowcase, huaweiHero, huaweiShowcase } from '../../data/brandsData'
const Brand = ({brandName}) => {

  
  const {theme} = useContext(Context)
  
  let heroData;
  let showcaseData;

  switch (brandName) {
    case 'apple':
      heroData = appleHero;
      showcaseData = appleShowcase
      break;
    case 'microsoft':
      heroData = microsoftHero;
      showcaseData = micorsoftShowcase;
      break;
    case 'dell':
      heroData = dellHero;
      showcaseData = dellShowcase
      break;
    case 'hp':
      heroData = hpHero;
      showcaseData = hpShowcase
      break;
    case 'samsung':
      heroData = samsungHero;
      showcaseData = samsungShowcase
      break;
    case 'sony':
      heroData = sonyHero;
      showcaseData = sonyShowcase
      break;
    case 'lenovo':
      heroData = lenovoHero;
      showcaseData = lenovoShowcase
      break;
    case 'huawei':
      heroData = huaweiHero;
      showcaseData = huaweiShowcase
      break;
  
    default:
      break;
  }

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
              <Item1 url={showcaseData[0].url}></Item1>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Item2 url={showcaseData[1].url}></Item2>
              <br></br>
              <Item3 url={showcaseData[2].url}></Item3>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item4 url={showcaseData[3].url}></Item4>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item5 url={showcaseData[4].url}></Item5>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item6 url={showcaseData[5].url}></Item6>
              <br></br>
              <Item9 url={showcaseData[6].url}></Item9>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Item7 url={showcaseData[7].url}></Item7>
            </Grid>
            <Grid item xs={12}>
              <Item8 url={showcaseData[8].url}></Item8>
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