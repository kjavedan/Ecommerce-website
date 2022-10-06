import React , {useContext, useState} from 'react'
import {Context} from '../../../context/uiContext'
import {Items} from './styles/CategoryItems.styled'
import { Item } from './styles/CategoryItem.styled'
import Parent from './CategoryItemParent'

const CategoryItems = ({items}) => {

  const {theme} = useContext(Context)

  console.log(items)
  
  return (
    <Items>
           <Item theme={theme}>
                <Parent />
                <Parent />
            </Item>
    </Items>
  )
}

export default CategoryItems