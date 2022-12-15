import React, { useContext, useEffect, useState } from 'react'
import StyledContainer from '../../components/styles/Container.styled'
import { Context } from '../../context/uiContext'
import useProducts from '../../hooks/useProducts'
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import Sidebar from '../../layouts/sidebar/Sidebar'
import { sidebarDataMobile } from '../../data/sidebarData'
import StyledMain from '../../layouts/main/components/styles/Main.styled'
import SidebarToggler from '../../layouts/main/components/SidebarToggler'
import PageRoute from '../../components/PageRoute'
import FastLinks from '../../components/FastLinks'
import { ProductCategorylinks } from '../../data/fastLinks'
import ProductsQTY from '../../components/styles/ProductsQTY.styled';
import Products from './components/Products'
import { Pagination } from '@mui/material'

const ProductCategory = ({url}) => {

    const {theme, displaySidebar} = useContext(Context)

    console.log(url)

    const [
            productsData,
            isLoading,
            selectedPage, 
            setselectedPage,
            numberOfProducts,
            numberOfPages,
            paginaitonStyles,
        ] = useProducts(url)

    return (
        <StyledContainer theme={theme}>
            <Header />
            <Sidebar category={sidebarDataMobile} isProductCategory={true}/>
            <StyledMain theme={theme} displaySidebar={displaySidebar}>
                <SidebarToggler />
                <ProductsQTY>
                    <PageRoute /> 
                    <FastLinks links={ProductCategorylinks} isHomePage={false}/>
                    <h5>{numberOfProducts} products</h5>
                </ProductsQTY>
                <div style={{backgroundColor: theme === '#fff' ? '#e0e0e0' : '#2E2E2E'}}>
                    
                    <Products 
                    productsData={productsData}
                    isLoding={isLoading}
                    selectedPage={selectedPage} 
                    numberOfPages={numberOfPages}
                    />
                    
                </div>
                <Pagination 
                sx={paginaitonStyles} 
                count={numberOfPages} 
                onChange={(e, value) => setselectedPage(value)}
                />
            </StyledMain>
            <Footer /> 
        </StyledContainer>
    )
}

export default ProductCategory