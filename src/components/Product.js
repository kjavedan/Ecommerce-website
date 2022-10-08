import React, { useContext } from 'react'
import { Context } from '../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Offer, Image } from './styles/Product.styled'

const Product = () => {

  const {theme} = useContext(Context)

  return (
    <StyledProduct>
        <Card theme={theme}>
          <Offer>%10 off</Offer>
          <Image>
            <img src='' alt='image' />
          </Image>
          <FreeDilevery>free delivery</FreeDilevery>
        </Card>
          <h3>Apple pro msx 13</h3>
    </StyledProduct>
  )
}

export default Product