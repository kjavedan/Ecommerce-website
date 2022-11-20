import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyledSlider, StyledTitle } from './Styles/Slider.styled'
import Wrapper from './Styles/Wrapper.styled'
import Product from '../../components/Product'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import {PrevBtn, NextBtn} from './Styles/SliderBtns.styled'
import { Context } from '../../context/uiContext'


const Slider = ({title, data}) => {

  const {theme} = useContext(Context)

  const [leftItems, setLeftItems] = useState(false)

  const ref = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(0)


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
 


  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset;
    setScrollPosition(ref.current.scrollLeft)
  }

  useEffect(()=> {
    console.log(ref.current.clientWidth)
    if(scrollPosition){
      setLeftItems(true)
    }else{
      setLeftItems(false)
    }
  })
  
  return (
    <StyledSlider>
        <StyledTitle><h2>{title}</h2> <p>see all</p></StyledTitle>
        <Wrapper ref={ref}>
          {leftItems &&
           <PrevBtn 
           theme={theme}
           onClick={() => scroll(-700)}
           ><BiChevronLeft /></PrevBtn>}
          <NextBtn 
          theme={theme}
          onClick={() => scroll(700)}
          ><BiChevronRight /></NextBtn>
          {productElements}
        </Wrapper>
    </StyledSlider>
  )
}

export default Slider