import React from 'react'
import Container from '../../../components/styles/Container.styled'

const BrandCategory = ({category}) => {
  return (
    <Container style={{backgroundColor:'red'}}>
        <div>BrandCategory {category}</div>
    </Container>
  )
}

export default BrandCategory