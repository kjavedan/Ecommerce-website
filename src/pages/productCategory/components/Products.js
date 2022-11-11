import React from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'

const Products = () => {
  return (
    <ProductsContainer>
        <Product 
        title={'Samsung s22 Ultra Duel simcard 512GB Memory 16GB RAM 24MP Camera...'}
        rate={'4.5'}
        availability={'available'}
        discount={'5'}
        isFreeDelivery={true}
        price={1099}/>
        <Product />
    </ProductsContainer>
  )
}

export default Products