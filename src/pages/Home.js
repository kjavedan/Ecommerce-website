import React, { useContext } from 'react'
import StyledContainer from '../components/styles/Container.styled'
import {Context} from '../context/themeContext'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import Sidebar from '../layouts/sidebar/Sidebar'
const Home = () => {

    const {theme} = useContext(Context)

  return (
    <>
     <StyledContainer theme={theme}>
        <Header />
        <Sidebar />
        <Footer />
    </StyledContainer>
    </>
  )
}

export default Home