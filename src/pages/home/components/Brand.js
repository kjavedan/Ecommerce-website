import React, { useContext } from 'react'
import { StyledBrand, StyledCard } from '../styles/Brands.styled'
import {Context} from '../../../context/uiContext'
const Brand = () => {

  const {theme} = useContext(Context)
  return (
    <StyledBrand theme={theme}>
        <StyledCard theme={theme}></StyledCard>
        <h4>Dell</h4>
    </StyledBrand>
  )
}

export default Brand