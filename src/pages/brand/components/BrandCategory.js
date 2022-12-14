import React, { useContext, useEffect, useState } from 'react'
import FastLinks from '../../../components/FastLinks'
import {Container} from '../../brand/styles/Container.styled'
import { Context } from '../../../context/uiContext'
import { links } from '../../../data/fastLinks'
import { ProductsContainer } from '../styles/BrandCategory.styled'
import BrandSidebar from './BrandSidebar'
import Products from '../../../pages/productCategory/components/Products'
import useProducts from '../../../hooks/useProducts'
import { Pagination } from '@mui/material'
import ProductsQTY from '../../../components/styles/ProductsQTY.styled'
import PageRoute from '../../../components/PageRoute'
import { sidebarDataMobile } from '../../../data/sidebarData'

const BrandCategory = ({category}) => {
    
    const {theme, displaySidebar} = useContext(Context)

    
    const [
            productsData,
            isLoading,
            selectedPage, 
            setselectedPage,
            numberOfProducts,
            numberOfPages,
            paginaitonStyles,
  ] = useProducts()


  return (
    <Container theme={theme}>
        <ProductsContainer>
          <ProductsQTY>
            <PageRoute />
              <FastLinks links={links}/>
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
        </ProductsContainer>
        <BrandSidebar 
        category={sidebarDataMobile}
        isProductCategory={true}
        />
    </Container>
  )
}

export default BrandCategory