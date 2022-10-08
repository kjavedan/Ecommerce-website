import React from 'react'
import { StyledSlider, StyledTitle } from './Styles/Slider.styled'
import Wrapper from './Styles/Wrapper.styled'
import Product from '../../components/Product'

// slider should receive (title, array of objects)
const Slider = ({title, data}) => {
  return (
    <StyledSlider>
        <StyledTitle><h2>{title}</h2> <p>see all</p></StyledTitle>
        <Wrapper>
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