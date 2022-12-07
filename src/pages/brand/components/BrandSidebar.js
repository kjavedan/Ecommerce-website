import React, { useContext } from 'react'
import CloseSidebar from '../../../components/CloseSidebar'
import { Context } from '../../../context/uiContext'
import { StyledBrandSidebar } from '../styles/BrandSidebar.styled'
import { BrandSidbarWrapper } from '../../../layouts/sidebar/styles/Wrappers.styled'
import Category from '../../../layouts/sidebar/components/Category'
import PriceFilter from '../../../layouts/sidebar/components/PriceFilter'

const BrandSidebar = ({category, isProductCategory}) => {

  const {theme, displaySidebar} = useContext(Context)

  const categoryElements = category.map((category, index) => <Category key={index} title={category.title} items={category.data} isProductCategory={isProductCategory}/>)


  return (
      <StyledBrandSidebar theme={theme} displaySidebar={displaySidebar}>
        <CloseSidebar />
          <BrandSidbarWrapper>
              {categoryElements}
              <PriceFilter />
          </BrandSidbarWrapper>
      </StyledBrandSidebar>
  )
}

export default BrandSidebar