import React, { useContext } from 'react'
import { Context } from '../../../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Discount, Image } from '../styles/Product.styled'
import { ProductInfo, Availability, RateBlock, BeforeDiscount } from '../../../components/styles/ProductInfo.styled'
import {HiStar} from 'react-icons/hi'
import ProductColors from './ProductColors.styled'
import CardContainer from '../styles/CardContainer.styled'

const Product = ({title, discount, isFreeDelivery, availability, rate, price, img, colors}) => {

  const {theme} = useContext(Context)
  
  const getAfterDiscountPrice = () => {
    const newPrice1 = price / 100;
    const newPrice2 = newPrice1 * discount;
    const newPrice3 = price - newPrice2;
    return newPrice3.toFixed(2)
    // (price - ((price / 100) * discount)).toFixed(2)
  }


  const productColors = colors.map((color, index) => <span 
    key={index}
    style={{
      backgroundColor:color,
      height:'10px', width:'10px',
      borderRadius:'50%'}}
    ></span>)

  
  return (
    <StyledProduct theme={theme}>
        <CardContainer>
          <Card theme={theme}>
          {discount ? <Discount>%{discount} off</Discount> : ''}
            <Image>
              <img src={img} alt='image' />
              
            </Image>
            {isFreeDelivery && <FreeDilevery>free delivery</FreeDilevery>}
          </Card>
          <ProductColors>
            {productColors}
          </ProductColors>
        </CardContainer>
        <ProductInfo>
          <h3>{title}</h3>
          <Availability>{availability}</Availability>
          <RateBlock><span>{rate}</span> <HiStar style={{color: '#FFD233', marginLeft:'.4rem'}} /></RateBlock>
          {discount ? 
            <h3 style={{position:'absolute', bottom:'0', right:'0'}}>${getAfterDiscountPrice()} <BeforeDiscount>{price}</BeforeDiscount></h3>:
            <h3>${price}</h3>
            }
        </ProductInfo>
    </StyledProduct>
  )
}

export default Product