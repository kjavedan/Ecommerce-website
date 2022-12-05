import React from 'react'
import { StyledBrands, Title } from '../styles/Brands.styled'
import Brand from './Brand'
import { brandsData } from '../../../data/brandsData'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

const Brands = () => {

  const BrandElements = brandsData.map( brand =>  <Link key={nanoid()} style={{textDecoration:'none'}} to={`/brands/${brand.title}`}><Brand key={nanoid()} img={brand.img} title={brand.title} /></Link>)
  
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