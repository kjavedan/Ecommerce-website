import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {Wrapper} from './components/styles/Wrappers.styled'
import Category from './components/Category'
import {items1, items2} from '../../data/sidebarData'

const Sidebar = () => {

    const {theme, displaySidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
         <Category title={'Category'} items={items1} />
         <Category title={'Take a look at'} items={items2} />
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar