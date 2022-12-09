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
import BrandCategory from './components/BrandCategory'

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
      {/* send the brand name to hero in order display the brand name links */}
        <Header />
        <Hero 
        background={heroData.background}
        logo={heroData.logo}
        />
        <Container theme={theme}>
          <Routes>
            <Route path='/showcase' element={ <BrandShowcase showcaseData={showcaseData} />} />
            <Route path='/mobile' element={<BrandCategory category={'mobile'} />} />
            <Route path='/laptop' element={<BrandCategory category={'mobile'} />} />
            <Route path='/tablet' element={<BrandCategory category={'mobile'} />} />
            <Route path='/watch' element={<BrandCategory category={'mobile'} />} />
            <Route path='/monitor' element={<BrandCategory category={'mobile'} />} />
            <Route path='/headset' element={<BrandCategory category={'headset'} />} />
            <Route path='/all' element={<BrandCategory category={'mobile'} />} />
            {/* write down all links path */}
          </Routes>
        
        </Container>  
        <Footer width={'100%'} />
    </StyledContainer>
        
  )
}

export default Brand