import React, { useContext } from 'react'
import { StyledChild } from '../styles/CategoryItem.styled'
import { Context } from '../../../context/uiContext'
import Checkbox from './Checkbox'
import { Link } from 'react-router-dom'

const CategoryItemChild = ({title, parentTitle, isProductCategory}) => {

  const {theme, hideSidebarSmallScreen} = useContext(Context)

  
  return (
    <>
      {isProductCategory ?
      <StyledChild theme={theme}> <Checkbox title={title}/> </StyledChild>
      :
      <Link 
      onClick={hideSidebarSmallScreen}
      style={{textDecoration: 'none'}} 
      to={`/${parentTitle}${title == 'all' ? '':'/'+title}`} >
      <StyledChild theme={theme}> {title} </StyledChild>
      </Link>
    }
    </>
  )
}

export default CategoryItemChild