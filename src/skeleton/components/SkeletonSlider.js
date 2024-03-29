import React, { useContext, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Card, StyledProduct } from '../../components/styles/Product.styled'
import { ProductInfo } from '../../components/styles/ProductInfo.styled'
import { Context } from '../../context/uiContext'
import { StyledSlider, StyledTitle } from '../../layouts/slider/Styles/Slider.styled'
import { NextBtn } from '../../layouts/slider/Styles/SliderBtns.styled'
import Wrapper from '../../layouts/slider/Styles/Wrapper.styled'


const SkeletonSlider = () => {


    const productsElements = Array(10).fill(0).map((_, index) => (
        <StyledProduct
        key={index}
        >
        <Card style={{backgroundColor:'transparent'}}>
             <Skeleton height={'100%'} />
        </Card>
        <ProductInfo>
             <Skeleton  count={2} style={{marginTop:'.3rem'}}/>
             <Skeleton width={'50%'} style={{marginTop:'.5rem'}}/>
        </ProductInfo>
     </StyledProduct>
    ))
   
  return (
    <>
            {productsElements}
    </>
  )
}

export default SkeletonSlider