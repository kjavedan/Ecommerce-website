import React, { useContext } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import Sidebar from '../../layouts/sidebar/Sidebar'
import { sidebarDataMobile } from '../../data/sidebarData'
import StyledMain from '../../layouts/main/components/styles/Main.styled'
import SidebarToggler from '../../layouts/main/components/SidebarToggler'
import PageRoute from '../../components/PageRoute'
import FastLinks from '../../components/FastLinks'
import { links } from '../../data/fastLinks'

const ProductCategory = () => {

    const {theme, displaySidebar} = useContext(Context)

    return (
        <StyledContainer theme={theme}>
            <Header />
            <Sidebar category={sidebarDataMobile} isProductCategory={true}/>
            <StyledMain theme={theme} displaySidebar={displaySidebar}>
                <SidebarToggler />
                <PageRoute />
                <FastLinks links={links}/>
            </StyledMain>
            <Footer /> 
        </StyledContainer>
    )
}

export default ProductCategory