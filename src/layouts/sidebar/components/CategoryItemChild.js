import React, { useContext } from 'react'
import { StyledChild } from '../styles/CategoryItem.styled'
import { Context } from '../../../context/uiContext'
import Checkbox from './Checkbox'

const CategoryItemChild = ({data, isProductCategory}) => {

  const {theme} = useContext(Context)

  return (
    <StyledChild theme={theme}>{isProductCategory ? <Checkbox /> : data} </StyledChild>
  )
}

export default CategoryItemChild