import React, { useContext } from 'react'
import { StyledSlider, StyledTitle } from './Styles/Slider.styled'
import Wrapper from './Styles/Wrapper.styled'
import Product from '../../components/Product'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import {PrevBtn, NextBtn} from './Styles/SliderBtns.styled'
import { Context } from '../../context/uiContext'


const Slider = ({title, data}) => {

  const {theme} = useContext(Context)

  const productElements = data.map(product => {
    return (
      <Product 
      title={product.title} 
      discount={product.discount} 
      isFreeDelivery={product.isFreeDelivery} 
      availability={product.availability} 
      rate={product.rate} 
      price={product.price} 
      url={product.url} />)
  })
 

  console.log(productElements)
  
  return (
    <StyledSlider>
        <StyledTitle><h2>{title}</h2> <p>see all</p></StyledTitle>
        <Wrapper>
          <PrevBtn theme={theme}><BiChevronLeft /></PrevBtn>
          <NextBtn theme={theme}><BiChevronRight /></NextBtn>
          {productElements}
        </Wrapper>
    </StyledSlider>
  )
}

export default Slider