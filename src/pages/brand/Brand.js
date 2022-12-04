import React, { useContext, useEffect } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Hero from './components/Hero'
import Footer from '../../layouts/footer/Footer'
import { Container } from './styles/Container.styled'
import BrandShowcase from './components/BrandShowcase'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { appleHero, appleShowcase, microsoftHero, micorsoftShowcase, dellHero, dellShowcase, hpHero, hpShowcase, samsungHero, samsungShowcase, sonyHero, sonyShowcase, lenovoHero, lenovoShowcase, huaweiHero, huaweiShowcase } from '../../data/brandsData'
import ProductCategory from '../productCategory/ProductCategory'

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

  const navigate = useNavigate()

  useEffect(()=> {
    navigate(`/brands/${brandName}/showcase`)
  }, [])

  return (
    
    <StyledContainer theme={theme}>
        <Header />
        <Hero 
        background={heroData.background}
        logo={heroData.logo}
        />
        <Container theme={theme}>
          <Routes>
            <Route path='/showcase' element={ <BrandShowcase showcaseData={showcaseData} />} />
            <Route path='/mobile' element={<p>apple mobile</p>} />
            <Route path='/laptop' element={<p>apple laptop</p>} />
            <Route path='/tablet' element={<p>apple tablet</p>} />
            <Route path='/watch' element={<p>apple watch</p>} />
            <Route path='/mobile' element={<p>apple mobile</p>} />
          </Routes>
        
        </Container>  
        <Footer width={'100%'} />
    </StyledContainer>
        
  )
}

export default Brand