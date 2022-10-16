import React from 'react'
import { StyledPriceFilter, Container, Input } from '../styles/PriceFilter.styled'
import Slider from '@mui/material/Slider';

const PriceFilter = () => {
  return (
    <StyledPriceFilter>
        <h1>Price Range</h1>
        <Container>
          <Input>
            <span>From:</span> <input type='number' />
          </Input>
          <Input>
            <span>To:</span> <input type='number' />
          </Input>
          <Slider /> 
        </Container>
    </StyledPriceFilter>
  )
}

export default PriceFilter