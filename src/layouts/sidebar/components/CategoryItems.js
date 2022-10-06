import React , {useContext, useState} from 'react'
import {Items, Parent, Children, Child} from './styles/CategoryItems.styled'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import {BiChevronRight} from 'react-icons/bi'
import { ParentTitle } from './styles/Titiles.styled'
import {Context} from '../../../context/uiContext'


const CategoryItems = () => {

  const {theme} = useContext(Context)
  const children = ['apple', 'samsung', 'sony', 'nokia']
  
  const childrenElement = children.map(item =><Child>{item}</Child>)
  
  const [displayChildElements, setDisplayChildElements] = useState(false)
  
  const toggleChilds = () => {
    setDisplayChildElements(prevState => !prevState)
  }

  console.log(displayChildElements)
  
  return (
    <Items>
           <Parent>
                <ParentTitle onClick={toggleChilds} theme={theme}>
                  <HiOutlineDeviceMobile /><h4>Mobile</h4> <BiChevronRight /> 
                </ParentTitle>
                <Children display={displayChildElements}>
                  {childrenElement}
                </Children>
              </Parent>
           <Parent>
                <ParentTitle onClick={toggleChilds}>
                  <HiOutlineDeviceMobile /><h4>Laptop</h4> <BiChevronRight /> 
                </ParentTitle>
                <Children>
                  {childrenElement}
                </Children>
              </Parent>
    </Items>
  )
}

export default CategoryItems