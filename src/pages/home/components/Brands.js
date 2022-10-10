import React from 'react'
import { StyledBrands, Title } from '../styles/Brands.styled'
import Brand from './Brand'

const Brands = () => {
  return (
    <>
      <Title>Popular brands</Title>
      <StyledBrands>
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
          <Brand />
      </StyledBrands>
    </>
  )
}

export default Brands