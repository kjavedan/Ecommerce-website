import React from 'react'
import StyledSlider from './Styles/Slider.styled'

// slider should receive (title, array of objects)
const Slider = ({title, data}) => {
  return (
    <StyledSlider>
        <h2>{title}</h2>
    </StyledSlider>
  )
}

export default Slider