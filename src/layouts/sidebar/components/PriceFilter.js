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
    setPriceRange(prevState => [parseInt(e.target.value), prevState[1]])
  }
  const setVal2 = (e) => {
    setPriceRange(prevState => [prevState[0], parseInt(e.target.value) ])
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
            <span>To:</span> <input value={priceRange[1]} onChange={setVal2} type='number' />
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
challenge

I want to change the price range value from two places
1. input
2. range slider

onChange change the priceRange state and change the value of them 
*/