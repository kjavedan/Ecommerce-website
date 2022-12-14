import React, { useContext, useEffect, useState } from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Context } from '../../../context/uiContext'
import SkeletonProductCategoryCard from '../../../skeleton/components/SkeletonProductCategoryCard'

const Products = ({selectedPage, productsData, isLoding}) => {


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

  if(productsData){
    getProductsToDisplay()
  }
  

  const products = productsToDisplay.map(item => <Product 
    key={item.id}
    id={item.id}
    title={item.title} 
    rate={item.rate} 
    availability={item.availability} 
    discount={item.discount} 
    isFreeDelivery={item.isFreeDelivery} 
    price={item.price} 
    colors={item.info.colors} 
    img={item.img}
    />)

  return (

    <ProductsContainer >
        {products}
        {isLoding && <SkeletonProductCategoryCard cards={12} />}
    </ProductsContainer>
  )
}

export default Products
