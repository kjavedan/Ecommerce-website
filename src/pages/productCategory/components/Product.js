import React, { useContext } from 'react'
import { Context } from '../../../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Discount, Image } from '../styles/Product.styled'
import { ProductInfo, Availability, RateBlock, BeforeDiscount, Price } from '../../../components/styles/ProductInfo.styled'
import {HiStar} from 'react-icons/hi'
import ProductColors from '../styles/ProductColors.styled'
import CardContainer from '../styles/CardContainer.styled'
import { getAfterDiscountPrice, getAvailability } from '../../../utils'
const Product = ({title, discount, isFreeDelivery, availability, rate, raters, price, img, colors}) => {

  const {theme} = useContext(Context)
  
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
          <h3 style={{height:'43px'}}>{title}</h3>
          <Availability>{getAvailability(availability)}</Availability>
          <RateBlock>
            <span>
              <p style={{display:'inline', fontSize:'10px'}}>({raters})</p> {rate}
            </span>
             <HiStar style={{color: '#FFD233', marginLeft:'.2rem'}} />
          </RateBlock>
          {discount ? 
            <Price>${getAfterDiscountPrice(price, discount)} <BeforeDiscount>{price}</BeforeDiscount></Price>:
            <Price>${price}</Price>
            }
        </ProductInfo>
    </StyledProduct>
  )
}

export default Product