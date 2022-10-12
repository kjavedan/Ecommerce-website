import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {Wrapper} from './components/styles/Wrappers.styled'
import Category from './components/Category'
import PriceFilter from './components/PriceFilter'

const Sidebar = ({category, isProductCategory}) => {

    const {theme, displaySidebar} = useContext(Context)

    const categoryElements = category.map(category => <Category title={category.title} items={category.data} isProductCategory={isProductCategory}/>)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
         {categoryElements}
          {/* the price filter should be displayed only in productList
          i can solve this in two ways 
          1. check the route
          2. using passed props -> displayPriceFilter = true
          for now i will take the second option just to test it
          and then when i started workong on the route i will test the first method as well
          */}
          {isProductCategory && <PriceFilter />}
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar