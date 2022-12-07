import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './styles/Sidebar.styled'
import {Wrapper} from './styles/Wrappers.styled'
import Category from './components/Category'
import PriceFilter from './components/PriceFilter'
import CloseSidebar from '../../components/CloseSidebar'

const Sidebar = ({category, isProductCategory}) => {

    const {theme, displaySidebar} = useContext(Context)

    const categoryElements = category.map((category, index) => <Category key={index} title={category.title} items={category.data} isProductCategory={isProductCategory}/>)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <CloseSidebar />
      <Wrapper theme={theme}>
         {categoryElements}
         {isProductCategory && <PriceFilter />}
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar