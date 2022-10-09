import React, { useContext } from 'react'
import { Context } from '../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Offer, Image } from './styles/Product.styled'
import { ProductInfo, Availability, Rate } from './styles/ProductInfo.styled'
import {HiStar} from 'react-icons/hi'
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
        <ProductInfo>
          <h3>Apple pro msx 13</h3>
          <Availability>available</Availability>
          <Rate><span>4.5</span> <HiStar style={{color: '#FFD233'}} /></Rate>
          <h3>$1099</h3>
        </ProductInfo>
    </StyledProduct>
  )
}

export default Product