import React, { useContext } from 'react'
import { Context } from '../../../context/uiContext'
import { StyledProduct, Card, FreeDilevery, Discount, Image } from '../styles/Product.styled'
import { ProductInfo, Availability, RateBlock, BeforeDiscount, Price } from '../../../components/styles/ProductInfo.styled'
import {HiStar} from 'react-icons/hi'
import ProductColors from '../styles/ProductColors.styled'
import CardContainer from '../styles/CardContainer.styled'

const Product = ({title, discount, isFreeDelivery, availability, rate, raters, price, img, colors}) => {

  const {theme} = useContext(Context)
  
  const getAfterDiscountPrice = () => {
    const newPrice1 = price / 100;
    const newPrice2 = newPrice1 * discount;
    const newPrice3 = price - newPrice2;
    return newPrice3.toFixed(2)
    // (price - ((price / 100) * discount)).toFixed(2)
  }

  const getAvailability = () => {
    if(availability){
      if(availability > 10 ) return 'available'
      else return `only ${availability} remained in stock`
    }else return 'out of stock'
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
          <Availability>{getAvailability()}</Availability>
          <RateBlock>
            <span>
              <p style={{display:'inline', fontSize:'10px'}}>({raters})</p> {rate}
            </span>
             <HiStar style={{color: '#FFD233', marginLeft:'.2rem'}} />
          </RateBlock>
          {discount ? 
            <Price>${getAfterDiscountPrice()} <BeforeDiscount>{price}</BeforeDiscount></Price>:
            <Price>${price}</Price>
            }
        </ProductInfo>
    </StyledProduct>
  )
}

export default Product