import React, { useContext } from 'react'
import { Context } from '../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Discount, Image } from './styles/Product.styled'
import { ProductInfo, Availability, Rate, BeforeDiscount } from './styles/ProductInfo.styled'
import {HiStar} from 'react-icons/hi'
import { getAfterDiscountPrice, getAvailability } from '../utils'

const Product = ({title, discount, isFreeDelivery, availability, rate, raters, price, img}) => {

  const {theme} = useContext(Context)

  return (
    <StyledProduct>
        <Card theme={theme}>
         {discount ? <Discount>%{discount} off</Discount> : ''}
          <Image>
            <img src={img} alt='image' />
          </Image>
          {isFreeDelivery && <FreeDilevery>free delivery</FreeDilevery>}
        </Card>
        <ProductInfo>
          <h3>{title}</h3>
          <Availability>{getAvailability(availability)}</Availability>
          <Rate>
          <span>
              <p style={{display:'inline', fontSize:'10px'}}>({raters})</p> 
            </span>
            <span>{rate}</span> <HiStar style={{color: '#FFD233'}} />
            </Rate>
          {discount ? 
            <h3>${getAfterDiscountPrice(price, discount)} <BeforeDiscount>{price}</BeforeDiscount></h3>:
            <h3>${price}</h3>
            }
        </ProductInfo>
    </StyledProduct>
  )
}

export default Product