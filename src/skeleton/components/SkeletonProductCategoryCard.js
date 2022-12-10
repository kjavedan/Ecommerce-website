import React, { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ProductInfo, RateBlock } from '../../components/styles/ProductInfo.styled'
import { Context } from '../../context/uiContext'
import CardContainer from '../../pages/productCategory/styles/CardContainer.styled'
import { Card, Image, StyledProduct } from '../../pages/productCategory/styles/Product.styled'
import ProductsContainer from '../../pages/productCategory/styles/Products.styled'

const SkeletonProductCategoryCard = () => {
    const {theme} = useContext(Context)

  return (
    <ProductsContainer >
        <StyledProduct theme={theme}>
            <CardContainer>
                <Card theme={theme}>  
                      <Skeleton height={'100%'}/>
                </Card>
            </CardContainer>
                <ProductInfo>
                    <h3>
                        <Skeleton width={'50%'}  style={{marginBottom:'.8rem', marginTop:'.6rem'}} />
                    </h3>
                    <h3>
                        <Skeleton count={3} style={{marginBottom:'.5rem'}} />
                    </h3>
                   
                </ProductInfo>
        </StyledProduct>
        
    </ProductsContainer>
  )
}

export default SkeletonProductCategoryCard