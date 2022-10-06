import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {Wrapper} from './components/styles/Wrappers.styled'
import Category from './components/Category'
import '../../assets/App.css'

const Sidebar = () => {

  const items = [
    {
      name: 'mobile',
      icons: '',
      childes: ['apple', 'samsung', 'sony', 'nokia']
    },
    {
      name: 'Laptop',
      icons: '',
      childes: ['apple', 'microsoft', 'dell', 'hp']
    },
    {
      name: 'headset',
      icons: '',
      childes: ['apple', 'samsung', 'sony', 'lenovo']
    },
    {
      name: 'keboard',
      icons: '',
      childes: ['apple', 'lenovo', 'shiami', 'other']
    },
    {
      name: 'other',
      icons: '',
      }
  ]


    const {theme, displaySidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
         <Category title={'Category'} items={items} />
         <Category title={'Take a look at'} />
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar