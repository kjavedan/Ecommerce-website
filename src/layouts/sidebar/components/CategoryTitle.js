import React, {useState} from 'react'
import { StyledCategoryTitle } from './styles/Titiles.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'


const CategoryTitle = ({toggleChilds, title}) => {

  return (
    <StyledCategoryTitle onClick={toggleChilds}>
        <h1>{title}</h1> <BiChevronRight />
    </StyledCategoryTitle>
  )
}

export default CategoryTitle