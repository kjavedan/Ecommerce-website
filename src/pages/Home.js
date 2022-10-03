import React, { useContext } from 'react'
import StyledContainer from '../components/styles/Container.styled'
import {Context} from '../context/uiContext'
import Header from '../layouts/header/Header'
import Sidebar from '../layouts/sidebar/Sidebar'
import Main from '../layouts/main/Main'
import Footer from '../layouts/footer/Footer'
const Home = () => {

    const {theme} = useContext(Context)

  return (
    <>
     <StyledContainer theme={theme}>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
    </StyledContainer>
    </>
  )
}

export default Home