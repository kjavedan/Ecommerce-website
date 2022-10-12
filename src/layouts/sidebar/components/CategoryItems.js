import React , {useContext, useState} from 'react'
import {Context} from '../../../context/uiContext'
import {Items} from '../styles/CategoryItems.styled'
import { Item } from '../styles/CategoryItem.styled'
import Parent from './CategoryItemParent'

const CategoryItems = ({items, isProductCategory}) => {

  const {theme} = useContext(Context)

  const ParentElements = items.map((item, index) => <Parent 
  key={index} 
  title={item.title} 
  icon={item.icon} 
  children={item.children}
  isProductCategory={isProductCategory} 
  />)
  
  return (
    <Items>
           <Item theme={theme}>
                {ParentElements}
            </Item>
    </Items> 
  )
}

export default CategoryItems