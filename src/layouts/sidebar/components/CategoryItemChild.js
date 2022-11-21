import React, { useContext } from 'react'
import { StyledChild } from '../styles/CategoryItem.styled'
import { Context } from '../../../context/uiContext'
import Checkbox from './Checkbox'
import { Link } from 'react-router-dom'

const CategoryItemChild = ({title, isProductCategory}) => {

  const {theme} = useContext(Context)

  return (
    <>
      {isProductCategory ?
      <StyledChild theme={theme}> <Checkbox title={title}/> </StyledChild>
      :
      <Link to={`/category/${title}`} ><StyledChild theme={theme}> {title} </StyledChild></Link>
    }
    </>
  )
}

export default CategoryItemChild