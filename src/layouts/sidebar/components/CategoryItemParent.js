import React, {useState, useContext} from 'react'
import { Context } from '../../../context/uiContext'
import { StyledParent } from './styles/CategoryItem.styled'
import { Children } from './styles/CategoryItems.styled'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import CategoryItemChild from './CategoryItemChild'

const Parent = () => {

    const {theme} = useContext(Context)

    const children = ['apple', 'samsung', 'sony', 'nokia']

    const child = true;
    
    const childElements = children.map((item, index) =><CategoryItemChild key={index} data={item} />)
    
    const [displayChildElements, setDisplayChildElements] = useState(false)
    
    const toggleChilds = () => {
      setDisplayChildElements(prevState => !prevState)
    }
  return (
    <>
        <StyledParent onClick={toggleChilds} theme={theme}>
            <HiOutlineDeviceMobile /><h5>Mobile</h5> {displayChildElements ? <BiChevronDown /> :<BiChevronRight /> }
        </StyledParent>
        <Children display={displayChildElements}>
            {childElements}
        </Children>
    </>
  )
}

export default Parent