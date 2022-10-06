import React , {useContext, useState} from 'react'
import {Items, Parent, Children} from './styles/CategoryItems.styled'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import {BiChevronRight} from 'react-icons/bi'
import { ParentTitle } from './styles/Titiles.styled'
import {Context} from '../../../context/uiContext'
import CategoryItem from './CategoryItem'


const CategoryItems = () => {

  const {theme} = useContext(Context)
  const children = ['apple', 'samsung', 'sony', 'nokia']
  
  const childElements = children.map(item =><CategoryItem data={item} />)
  
  const [displayChildElements, setDisplayChildElements] = useState(false)
  
  const toggleChilds = () => {
    setDisplayChildElements(prevState => !prevState)
  }

  console.log(displayChildElements)
  
  return (
    <Items>
           <Parent theme={theme}>
                <ParentTitle onClick={toggleChilds} theme={theme}>
                  <HiOutlineDeviceMobile /><h5>Mobile</h5> <BiChevronRight /> 
                </ParentTitle>
                <Children display={displayChildElements}>
                  {childElements}
                </Children>
              </Parent>
           <Parent theme={theme}>
                <ParentTitle onClick={toggleChilds} theme={theme}>
                  <HiOutlineDeviceMobile /><h5>Laptop</h5> <BiChevronRight /> 
                </ParentTitle>
                <Children>
                  {childElements}
                </Children>
              </Parent>
    </Items>
  )
}

export default CategoryItems