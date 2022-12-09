import React, { useEffect, useState } from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'
import {mobile, laptop, headset, other, keyboard, mouse} from '../../../data/ProductsData'
import { json } from 'react-router-dom'

const Products = ({category, selectedPage, setNumberOfPages, setNumberOfProducts}) => {


  // let data;

  // products needs to call category data from an Api

  const [productsData, setProductsData] = useState()

  // switch (category) {
  //   case 'mobile':
  //     data = mobile;
  //     break;
  //   case 'laptop':
  //     data = laptop;
  //     break;
  //   case 'mouse':
  //     data = mouse;
  //     break;
  //   case 'keyboard':
  //     data = keyboard;
  //     break;
  //   case 'headset':
  //     data = headset;
  //     break;
  //   case 'other':
  //     data = other;
  //     break;
  
  //   default:
  //     break;
  // }

  
  let productsToDisplay = []

  const getProductsToDisplay = () => {
    const numOfProductsPerPage = 20;
    const startFrom = (selectedPage * numOfProductsPerPage) - numOfProductsPerPage;
    const endAt = selectedPage * numOfProductsPerPage;

    let i = startFrom;

    while(productsData[i] !== undefined && i < endAt){
      productsToDisplay.push(productsData[i])
      i++
    }

  }
  
  const handleProductsInfo = () => {
      const numberOfProducts = productsData.length
      const numberOfPages = Math.ceil(numberOfProducts / 20)
      setNumberOfPages(numberOfPages)
      setNumberOfProducts(productsData.length)
  }

  if(productsData){
    getProductsToDisplay()
    handleProductsInfo()
  }

  

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
      fetch('https://raw.githubusercontent.com/kjavedan/mockJson/main/.mockend.json')
        .then(res => res.json())
        .then(data => setProductsData(data) )
    }, [])

    // useEffect(()=> {

    // })

  
    
  return (

    <ProductsContainer>
        {products}
    </ProductsContainer>
  )
}

export default Products
