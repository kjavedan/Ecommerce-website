import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import {Context} from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Sidebar from '../../layouts/sidebar/Sidebar'
import Footer from '../../layouts/footer/Footer'
import StyledMain from '../../layouts/main/components/styles/Main.styled'
import SidebarToggler from '../../layouts/main/components/SidebarToggler'
import FastLinks from '../../components/FastLinks'
import PageRoute from '../../components/PageRoute'
import Slider from '../../layouts/slider/Slider'
import { productsData, productsData2 } from '../../data/sliderData'
import Brands from './components/Brands'
import { sidebarDataHome } from '../../data/sidebarData'
import {links} from '../../data/fastLinks'
import useSlider from '../../hooks/useSlider'

const Home = () => {

    const {theme, displaySidebar} = useContext(Context)

    const data = useSlider('https://api.jsonbin.io/v3/b/63a2e4e3dfc68e59d56dc001')

    console.log(data)

  return (
    <>
     <StyledContainer theme={theme}>
        <Header />
        <Sidebar sidebarData={sidebarDataHome} displayPriceFilter={false}/>
        <StyledMain theme={theme} displaySidebar={displaySidebar}>
          <SidebarToggler /> 
          <PageRoute />
          <FastLinks links={links} isHomePage={true}/>
          <Slider title={'hot sails'} data={productsData} />
          <Brands />
          <Slider title={'newest products'} data={productsData2} />
          <Slider title={'popular products'} data={productsData} />
          <Slider title={'top rated'} data={productsData2} />
          <Slider title={'highest off'} data={useSlider('https://api.jsonbin.io/v3/b/63a2e4e3dfc68e59d56dc001')} />             
        </StyledMain>
        <Footer />
    </StyledContainer>
    </>
  )
}

export default Home