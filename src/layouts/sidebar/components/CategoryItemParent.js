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
    
    const commonIcon = displayChildElements ? <BiChevronDown /> : <BiChevronRight />;

    const toggleChilds = () => {
      setDisplayChildElements(prevState => !prevState)
    }
    const openRoute = () => {

    }
  return (
    <>
        <StyledParent onClick={ children.length ? toggleChilds : openRoute} theme={theme}>
            {icon}<h5>{title}</h5> {children.length ? commonIcon : ''}
        </StyledParent>
        <Children display={displayChildElements ? 1 : 0}>
            {childElements}
        </Children>
    </>
  )
}

export default Parent