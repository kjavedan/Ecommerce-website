import React from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'
import {mobileProducts} from '../../../data/ProductsData'

const Products = ({setNumberOfPages, selectedPage}) => {

  const countNumberOfPages = () => {
    const numberOfProducts = mobileProducts.length
    const numberOfPages = Math.ceil(numberOfProducts / 20)
    setNumberOfPages(numberOfPages)
  }
  countNumberOfPages()
  
  let productsToDisplay = []

  const getProductsToDisplay = () => {
    const numOfProductsPerPage = 20;
    const startFrom = (selectedPage * numOfProductsPerPage) - numOfProductsPerPage;
    // const endAt = selectedPage * numOfProductsPerPage;
    let i = startFrom;
    while(mobileProducts[i] !== undefined){
      productsToDisplay.push(mobileProducts[i])
      i++
    }
  }
  getProductsToDisplay()

  const products = productsToDisplay.map(item => <Product 
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
