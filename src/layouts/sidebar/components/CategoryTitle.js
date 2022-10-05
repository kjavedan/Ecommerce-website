import React, {useState} from 'react'
import { StyledCategoryTitle } from './styles/Titiles.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'


const CategoryTitle = ({toggleChilds}) => {

  return (
    <StyledCategoryTitle onClick={toggleChilds}>
        <h1>Category</h1> <BiChevronRight />
    </StyledCategoryTitle>
  )
}

export default CategoryTitle