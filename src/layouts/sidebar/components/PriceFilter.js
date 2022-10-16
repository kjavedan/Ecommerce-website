import React, { useContext } from 'react'
import { StyledPriceFilter, Container, Input } from '../styles/PriceFilter.styled'
import Slider from '@mui/material/Slider';
import { Context } from '../../../context/uiContext';

const PriceFilter = () => {

  const {theme} = useContext(Context)

  return (
    <StyledPriceFilter>
        <h2>Price Range</h2>
        <Container>
          <Input theme={theme}>
            <span>From:</span> <input type='number' />
          </Input>
          <Input theme={theme}>
            <span>To:</span> <input type='number' />
          </Input>
          <Slider /> 
        </Container>
    </StyledPriceFilter>
  )
}

export default PriceFilter