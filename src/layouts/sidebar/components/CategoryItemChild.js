import React, { useContext } from 'react'
import { StyledChild } from './styles/CategoryItem.styled'
import { Context } from '../../../context/uiContext'

const CategoryItemChild = ({data}) => {

  const {theme} = useContext(Context)

  return (
    <StyledChild theme={theme}>{data}</StyledChild>
  )
}

export default CategoryItemChild