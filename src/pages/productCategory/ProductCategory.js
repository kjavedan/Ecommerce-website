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
import { ProductCategorylinks } from '../../data/fastLinks'
import Container from './styles/Container.styled';
import FilterBtn from './components/FilterBtn'

const ProductCategory = () => {

    const {theme, displaySidebar} = useContext(Context)

    return (
        <StyledContainer theme={theme}>
            <Header />
            <Sidebar category={sidebarDataMobile} isProductCategory={true}/>
            <StyledMain theme={theme} displaySidebar={displaySidebar}>
                <SidebarToggler />
                <Container>
                    <PageRoute /> 
                    <FilterBtn />
                </Container>
                <FastLinks links={ProductCategorylinks}/>
            </StyledMain>
            <Footer /> 
        </StyledContainer>
    )
}

export default ProductCategory