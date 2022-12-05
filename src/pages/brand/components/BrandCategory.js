import React, { useContext, useState } from 'react'
import FastLinks from '../../../components/FastLinks'
import {Container} from '../../brand/styles/Container.styled'
import { Context } from '../../../context/uiContext'
import { links } from '../../../data/fastLinks'
import { ProductsContainer } from '../styles/BrandCategory.styled'
import { BrandSidebar } from '../styles/BrandSidebar.styled'
const BrandCategory = ({category}) => {

    const {theme, displaySidebar} = useContext(Context)

  return (
    <Container theme={theme}>
        <ProductsContainer>
            <FastLinks links={links}/>
        </ProductsContainer>
        <BrandSidebar theme={theme} displaySidebar={displaySidebar}></BrandSidebar>
        <div>BrandCategory {category}</div>
    </Container>
  )
}

export default BrandCategory