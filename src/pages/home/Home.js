import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import {Context} from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Sidebar from '../../layouts/sidebar/Sidebar'
import Footer from '../../layouts/footer/Footer'
import StyledMain from '../../layouts/main/components/styles/Main.styled'
import SidebarToggler from '../../layouts/main/components/SidebarToggler'
import FastLinks from './components/FastLinks'
import PageRoute from '../../components/PageRoute'
import Slider from '../../layouts/slider/Slider'
import { productsData } from '../../data/sliderData'

const Home = () => {

    const {theme, displaySidebar} = useContext(Context)

  return (
    <>
     <StyledContainer theme={theme}>
        <Header />
        <Sidebar />
        <StyledMain theme={theme} displaySidebar={displaySidebar}>
          <SidebarToggler /> 
          <FastLinks />
          <PageRoute />
          <Slider title={'hot sails'} data={productsData} />
        
        </StyledMain>
        <Footer />
    </StyledContainer>
    </>
  )
}

export default Home