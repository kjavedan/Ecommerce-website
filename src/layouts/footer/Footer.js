import React, { useContext } from 'react'
import {StyledFooter, Container} from './styles/Footer.styled'
import FooterMenu from './components/FooterMenu'
import { Context } from '../../context/uiContext'
import Logo from '../header/components/Logo'
import StyledButton from '../../components/styles/Button.styled'

const Footer = () => {

  const {theme, displaySidebar} = useContext(Context)

  return (
    <>
    <StyledFooter theme={theme} displaySidebar={displaySidebar}>
        <Container>
            <h3>Customer Service</h3>
            <p>Common questions</p>
            <p>How to return the product ?</p>
            <p>Report a problem</p>
            <p>Privecy</p>
        </Container>
        <Container>
            <h3>Purchase Guide</h3>
            <p>How to order ?</p>
            <p>Deleviry method ?</p>
            <p>Payment methods ?</p>
        </Container>
        <Container>
          <Logo />
            <h3 style={{margin: '.5rem 0'}}>Subscribe for the latest news.</h3>
            <input type="text" placeholder='Your email'/>
            <StyledButton>send</StyledButton>
        </Container>
    </StyledFooter>
    <FooterMenu />
    </>
  )
}

export default Footer