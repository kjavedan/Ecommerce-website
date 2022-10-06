import React, {useState} from 'react'
import { StyledCategory } from './styles/Category.styled'
import CategoryTitle from './CategoryTitle'
import CategoryItems from './CategoryItems'

const Category = ({title, items}) => {

    const [displayCategoryItems, setDisplayCategoryItems] = useState(true)

    const toggleChilds = () => {setDisplayCategoryItems(prevState=> !prevState)}

  return (
    <StyledCategory display={displayCategoryItems}>
        <CategoryTitle display={displayCategoryItems} toggleChilds={toggleChilds} title={title}/>
        <CategoryItems items={items}/>
    </StyledCategory>
  )
}

export default Category