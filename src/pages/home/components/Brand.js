import React, { useContext } from 'react'
import { StyledBrand, StyledCard } from '../styles/Brands.styled'
import {Context} from '../../../context/uiContext'
const Brand = ({title, img}) => {

  const {theme} = useContext(Context)
  return (
    <StyledBrand theme={theme}>
        <StyledCard theme={theme}>
          <img src={img} alt="" />
        </StyledCard>
        <h4>{title}</h4>
    </StyledBrand>
  )
}

export default Brand