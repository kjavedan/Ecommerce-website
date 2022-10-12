import React, { useContext } from 'react'
import { StyledChild } from './styles/CategoryItem.styled'
import { Context } from '../../../context/uiContext'

const CategoryItemChild = ({data, isProductCategory}) => {

  const {theme} = useContext(Context)

  return (
    <StyledChild theme={theme}>{data}  {isProductCategory && <input type='checkbox' />} </StyledChild>
  )
}

export default CategoryItemChild