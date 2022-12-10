import React, { useContext, useEffect, useState } from 'react'
import ProductsContainer from '../styles/Products.styled'
import Product from '../components/Product'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Context } from '../../../context/uiContext'
import SkeletonProductCategoryCard from '../../../skeleton/components/SkeletonProductCategoryCard'

const Products = ({category, selectedPage, setNumberOfPages, setNumberOfProducts}) => {


  const [productsData, setProductsData] = useState()

  const[isLoding, setIsLoading] = useState(true)

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
    id={item.id}
    title={item.title} 
    rate={item.rate} 
    availability={item.availability} 
    discount={item.discount} 
    isFreeDelivery={item.isFreeDelivery} 
    price={item.price} 
    colors={item.colors} 
    img={item.img}
    />)


    // useEffect(()=> {
    //   fetch('https://raw.githubusercontent.com/kjavedan/mockJson/main/.mockend.json')
    //     .then(res => res.json())
    //     .then(data => {
    //       setProductsData(data)
    //       setIsLoading(false)
    //     })
    // }, [])

    
    useEffect(()=>{
      const fetchData = async () => {
        await fetch('https://raw.githubusercontent.com/kjavedan/mockJson/main/.mockend.json')
          .then(res => res.json())
          .then(data => {
            setProductsData(data)
            setIsLoading(false)
          })
          .catch(e => console.log(e))
      }

      const timer = setTimeout(() => {
        fetchData();
      }, 5000)

      return () => clearTimeout(timer);
    },[])


    const {theme} = useContext(Context)
    const color = isLoding ? theme : false
    
  return (

    <ProductsContainer color={color}>
        {/* {products} */}
        {/* {isLoding &&  */}
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        <SkeletonProductCategoryCard />
        
        {/* } */}
    </ProductsContainer>
  )
}

export default Products
