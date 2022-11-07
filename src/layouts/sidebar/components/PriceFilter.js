import React, { useContext, useState } from 'react'
import { StyledPriceFilter, Container, Input } from '../styles/PriceFilter.styled'
import Slider from '@mui/material/Slider';
import { Context } from '../../../context/uiContext';

const PriceFilter = () => {

  const {theme} = useContext(Context)


  const [priceRange, setPriceRange] = useState([2000, 8000])


  const handleChange = (e) => {
    setPriceRange(e.target.value)
  }
  console.log(priceRange)

  const setVal1 = (e) => {
    let value;
    if(e.target.value >= priceRange[1] + 10){
      value = priceRange[1] - 10;
    }
    else if(e.target.value > 12000){
      value = 12000;
    } 
    else if(e.target.value < 0){
      value = 0;
    }
    else{
      value = e.target.value;
    }
    setPriceRange(prevState => [value, prevState[1]])
  }
  const setVal2 = (e) => {
    let value;
    if(e.target.value > 12000){
      value = 12000;
    } 
    else if(e.target.value < 0){
      value = 10;
    }
    else{
      value = e.target.value;
    }
    setPriceRange(prevState => [prevState[0], value ])
  }
  const valuetext = () => {
    console.log('')
  }

  return (
    <StyledPriceFilter>
        <h2>Price Range</h2>
        <Container>
          <Input theme={theme}>
            <span>From: </span> <input value={priceRange[0]} onChange={setVal1} min={'0'} max={'1199'} type='number' />
          </Input> 
          <Input theme={theme}>
            <span>To: </span> <input value={priceRange[1]} onChange={setVal2} type='number' />
          </Input>
          <Slider    
          value={priceRange}
          disableSwap
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="secondary"
          max={12000}
        />
        
        </Container>
    </StyledPriceFilter>
  )
}

export default PriceFilter


/*
challenge 1
I want to change the price range value from two places
1. input
2. range slider

onChange change the priceRange state and change the value of them 
-----------------------------------------------------------------
challenge 2
strict the priceRange value to 0 and 12000
if the user try to enter a number larger than 1200 display a worning to him
if the user try to try negative number display a warning
if the user try to delete the input value set the value to 0

-----------------------------------------------------------------
challenge 3
invalid proptype when I empty the input filed
solution -> use propTypes checking

*/