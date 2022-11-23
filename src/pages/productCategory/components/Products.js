import React, { useEffect } from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'
import {mobile, laptop, headset, other, keyboard, mouse} from '../../../data/ProductsData'

const Products = ({category, selectedPage, setNumberOfPages, setNumberOfProducts}) => {

  let data;

  switch (category) {
    case 'mobile':
      data = mobile;
      break;
    case 'laptop':
      data = laptop;
      break;
    case 'mouse':
      data = mouse;
      break;
    case 'keyboard':
      data = keyboard;
      break;
    case 'headset':
      data = headset;
      break;
    case 'other':
      data = other;
      break;
  
    default:
      break;
  }

  console.log(data)
  console.log(category)

  let productsToDisplay = []

  const getProductsToDisplay = () => {
    const numOfProductsPerPage = 20;
    const startFrom = (selectedPage * numOfProductsPerPage) - numOfProductsPerPage;
    const endAt = selectedPage * numOfProductsPerPage;
    console.log(endAt)

    let i = startFrom;

    while(data[i] !== undefined && i < endAt){
      productsToDisplay.push(data[i])
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


    useEffect(()=> {
      const numberOfProducts = data.length
      const numberOfPages = Math.ceil(numberOfProducts / 20)
      setNumberOfPages(numberOfPages)
      setNumberOfProducts(data.length)
    })
    
  return (

    <ProductsContainer>
        {products}
    </ProductsContainer>
  )
}

export default Products
