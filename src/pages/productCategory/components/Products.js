import React from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'
import {mobileProducts} from '../../../data/ProductsData'

const Products = () => {

  const products = mobileProducts.map(item => <Product 
    key={item.id}
    title={item.title} 
    rate={item.rate} 
    availability={item.availability} 
    discount={item.discount} 
    isFreeDelivery={item.isFreeDelivery} 
    price={item.price} 
    colors={item.colors} 
    img={item.img}
    />)
    
  return (

    <ProductsContainer>
        {products}
    </ProductsContainer>
  )
}

export default Products