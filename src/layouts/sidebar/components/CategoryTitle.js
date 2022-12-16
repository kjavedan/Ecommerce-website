import React, {useContext, useState} from 'react'
import { StyledCategoryTitle } from '../styles/CategoryTitle.styled'
import {BiChevronLeft, BiChevronRight, BiChevronDown} from 'react-icons/bi'
import { Context } from '../../../context/uiContext'
import Skeleton from 'react-loading-skeleton'

const CategoryTitle = ({display, toggleChilds, title}) => {

  const {theme} = useContext(Context)
  
  return (
    <StyledCategoryTitle onClick={toggleChilds} theme={theme}>
        <h1>{title}</h1> {display ? <BiChevronDown /> : <BiChevronRight />} 
    </StyledCategoryTitle>
  )
}

export default CategoryTitle