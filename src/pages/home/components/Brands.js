import React from 'react'
import { StyledBrands, Title } from '../styles/Brands.styled'
import Brand from './Brand'
import { brandsData } from '../../../data/brandsData'

const Brands = () => {

  const BrandElements = brandsData.map(brand =>  <Brand img={brand.img} title={brand.title} />)
  return (
    <>
      <Title>Popular brands</Title>
      <StyledBrands>
         {BrandElements}
      </StyledBrands>
    </>
  )
}

export default Brands