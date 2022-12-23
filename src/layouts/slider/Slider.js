import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyledSlider, StyledTitle } from './Styles/Slider.styled'
import Wrapper from './Styles/Wrapper.styled'
import Product from '../../components/Product'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import {PrevBtn, NextBtn} from './Styles/SliderBtns.styled'
import { Context } from '../../context/uiContext'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import useSlider from '../../hooks/useSlider'
import SkeletonSlider from '../../skeleton/components/SkeletonSlider'
import Skeleton from 'react-loading-skeleton'

const Slider = ({title, url}) => {

  const {theme} = useContext(Context)

  const [data, isLoading] = useSlider(url)

  const [leftItems, setLeftItems] = useState(false)

  const [rightItems, setRightItems] = useState(true)

  const [count, setCount] = useState(0)

  const ref = useRef(null)
  
  const [scrollPosition, setScrollPosition] = useState(0)

  const [sliderWidth, setSliderWidth] = useState(0)

  const productElements = data.map(product => {
    return (
      <Product 
      key={nanoid()}
      title={product.title} 
      discount={product.discount} 
      isFreeDelivery={product.isFreeDelivery} 
      availability={product.availability} 
      rate={product.rate} 
      raters={product.raters}
      price={product.price} 
      img={product.img} />)
  })
  
  const scroll = directions => {
    setCount(prevCount => prevCount + 1)
    if(directions === 'left'){
      setScrollPosition(ref.current.scrollLeft -= (sliderWidth - 200))

    }else{
      setScrollPosition(ref.current.scrollLeft += (sliderWidth -200))
    }
  }

  useEffect(()=> {
    
    {scrollPosition <=0  ? setLeftItems(false) : setLeftItems(true)}
    {scrollPosition > 200 * data.length  - sliderWidth ? setRightItems(false) : setRightItems(true)}

      setSliderWidth(ref.current.clientWidth)
    
  },[count])
  
  return (
 
      <StyledSlider>
        <StyledTitle><h2>{title}</h2> <Link style={{font:'500 .8rem poppins', color:'gray'}} to={title}>see all</Link></StyledTitle>
        <Wrapper ref={ref}>
          {/* left button */}
           {leftItems &&
           <PrevBtn 
           theme={theme}
           onClick={() => scroll('left')}
           ><BiChevronLeft /></PrevBtn>}
           
          {/* right button */}
          {rightItems &&
          <NextBtn 
          theme={theme}
          onClick={() => scroll('right')}
          ><BiChevronRight /></NextBtn>} 
          {productElements.length ? productElements : <SkeletonSlider />}
        </Wrapper>
    </StyledSlider>
  )
}

export default Slider