import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Hero from './components/Hero'
import Footer from '../../layouts/footer/Footer'
import { Container } from './styles/Container.styled'

const Brand = () => {

  const {theme} = useContext(Context)


  return (
    
    <StyledContainer theme={theme}>
        <Header />
        <Hero />
        <Container theme={theme}>
          
          </Container>  
        <Footer width={'100%'} />
    </StyledContainer>
        
  )
}

export default Brand