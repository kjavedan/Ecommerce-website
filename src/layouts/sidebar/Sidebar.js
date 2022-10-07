import React, {useState, useContext} from 'react'
import {Context} from '../../context/uiContext'
import StyledSidebar from './components/styles/Sidebar.styled'
import {Wrapper} from './components/styles/Wrappers.styled'
import Category from './components/Category'
import '../../assets/App.css'

const Sidebar = () => {

  const items = [
    {
      title: 'mobile',
      icons: '',
      children: ['apple', 'samsung', 'sony', 'nokia']
    },
    {
      title: 'Laptop',
      icons: '',
      children: ['apple', 'microsoft', 'dell', 'hp']
    },
    {
      title: 'headset',
      icons: '',
      children: ['apple', 'samsung', 'sony', 'lenovo']
    },
    {
      title: 'keboard',
      icons: '',
      children: ['apple', 'lenovo', 'shiami', 'other']
    },
    {
      title: 'other',
      icons: '',
      children: []
      }
  ]


    const {theme, displaySidebar} = useContext(Context)

  return (
    <StyledSidebar theme={theme} displaySidebar={displaySidebar}>
      <Wrapper theme={theme}>
         <Category title={'Category'} items={items} />
      </Wrapper>
    </StyledSidebar>
  )
}

export default Sidebar