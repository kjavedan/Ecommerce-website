import React, {useContext, useState} from 'react'
import { StyledCategoryTitle } from './styles/Titiles.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'
import { Context } from '../../../context/uiContext'

const CategoryTitle = ({toggleChilds, title}) => {

  const {theme} = useContext(Context)
  
  return (
    <StyledCategoryTitle onClick={toggleChilds} theme={theme}>
        <h1>{title}</h1> <BiChevronRight />
    </StyledCategoryTitle>
  )
}

export default CategoryTitle