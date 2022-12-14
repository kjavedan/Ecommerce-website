import React, { useContext } from 'react'
import { Context } from '../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Discount, Image } from './styles/Product.styled'
import { ProductInfo, Availability, Rate, BeforeDiscount } from './styles/ProductInfo.styled'
import {HiStar} from 'react-icons/hi'


const Product = ({title, discount, isFreeDelivery, availability, rate, price, img}) => {

  const {theme} = useContext(Context)

  const getAfterDiscountPrice = () => {
    const newPrice1 = price / 100;
    const newPrice2 = newPrice1 * discount;
    const newPrice3 = price - newPrice2;
    return newPrice3.toFixed(2)
    // (price - ((price / 100) * discount)).toFixed(2)
  }
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
          <Availability>{availability}</Availability>
          <Rate><span>{rate}</span> <HiStar style={{color: '#FFD233'}} /></Rate>
          {discount ? 
            <h3>${getAfterDiscountPrice()} <BeforeDiscount>{price}</BeforeDiscount></h3>:
            <h3>${price}</h3>
            }
        </ProductInfo>
    </StyledProduct>
  )
}

export default Product