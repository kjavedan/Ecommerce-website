import React, { useContext } from 'react'
import { StyledSlider, StyledTitle } from './styles/Slider.styled'
import Wrapper from './styles/Wrapper.styled'
import Product from '../../components/Product'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import {PrevBtn, NextBtn} from './styles/SliderBtns.styled'
import { Context } from '../../context/uiContext'


const Slider = ({title, data}) => {

  const {theme} = useContext(Context)

  return (
    <StyledSlider>
        <StyledTitle><h2>{title}</h2> <p>see all</p></StyledTitle>
        <Wrapper>
          <PrevBtn theme={theme}><BiChevronLeft /></PrevBtn>
          <NextBtn theme={theme}><BiChevronRight /></NextBtn>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </Wrapper>
    </StyledSlider>
  )
}

export default Slider