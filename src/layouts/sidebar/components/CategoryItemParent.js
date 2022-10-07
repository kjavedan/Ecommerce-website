import React, {useState, useContext} from 'react'
import { Context } from '../../../context/uiContext'
import { StyledParent } from './styles/CategoryItem.styled'
import { Children } from './styles/CategoryItems.styled'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import CategoryItemChild from './CategoryItemChild'

const Parent = ({title, icon, children}) => {

    const {theme} = useContext(Context)

  
    const child = true;
    
    const childElements = children.map((item, index) =><CategoryItemChild key={index} data={item} />)
    console.log(children)
    const [displayChildElements, setDisplayChildElements] = useState(false)
    
    const toggleChilds = () => {
      setDisplayChildElements(prevState => !prevState)
    }
  return (
    <>
        <StyledParent onClick={toggleChilds} theme={theme}>
            <HiOutlineDeviceMobile /><h5>{title}</h5> {displayChildElements ? <BiChevronDown /> :<BiChevronRight /> }
        </StyledParent>
        <Children display={displayChildElements ? 1 : 0}>
            {childElements}
        </Children>
    </>
  )
}

export default Parent