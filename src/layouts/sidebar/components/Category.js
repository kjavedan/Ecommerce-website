import React, {useState} from 'react'
import { StyledCategory } from '../styles/Category.styled'
import CategoryTitle from './CategoryTitle'
import CategoryItems from './CategoryItems'

const Category = ({title, items, isProductCategory}) => {

    const [displayCategoryItems, setDisplayCategoryItems] = useState(true)

    const toggleChilds = () => {setDisplayCategoryItems(prevState=> !prevState)}

  return (
    <StyledCategory display={displayCategoryItems ? 1 : 0}>
        <CategoryTitle display={displayCategoryItems ? 1 : 0} toggleChilds={toggleChilds} title={title}/>
        <CategoryItems items={items} isProductCategory={isProductCategory} />
        {isProductCategory && <p>Delete all filters</p>}
    </StyledCategory>
  )
}

export default Category