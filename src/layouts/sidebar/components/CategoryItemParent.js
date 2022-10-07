import React, {useState, useContext} from 'react'
import { Context } from '../../../context/uiContext'
import { StyledParent } from './styles/CategoryItem.styled'
import { Children } from './styles/CategoryItems.styled'
import CategoryItemChild from './CategoryItemChild'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'


const Parent = ({title, icon, children}) => {

    const {theme} = useContext(Context)

    console.log(children.length)
    const childElements = children.map((item, index) =><CategoryItemChild key={index} data={item} />)

    const [displayChildElements, setDisplayChildElements] = useState(false)
    
    const toggleChilds = () => {
      setDisplayChildElements(prevState => !prevState)
    }
  return (
    <>
        <StyledParent onClick={ children.length ? toggleChilds : ''} theme={theme}>
            {icon}<h5>{title}</h5> { displayChildElements ? <BiChevronDown /> : <BiChevronRight /> }
        </StyledParent>
        <Children display={displayChildElements ? 1 : 0}>
            {childElements}
        </Children>
    </>
  )
}

export default Parent