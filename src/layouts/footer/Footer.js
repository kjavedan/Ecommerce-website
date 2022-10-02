import React, { useContext } from 'react'
import {StyledFooter, Container} from './components/styles/Footer.styled'
import FooterMenu from './components/FooterMenu'
import { Context } from '../../context/themeContext'

const Footer = () => {

  const {theme} = useContext(Context)

  return (
    <>
    <StyledFooter theme={theme}>
        <Container>
           <p>Customer Service</p>
        </Container>
    </StyledFooter>
    <FooterMenu />
    </>
  )
}

export default Footer