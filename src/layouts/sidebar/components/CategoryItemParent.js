import React, {useState, useContext} from 'react'
import { Context } from '../../../context/uiContext'
import { StyledParent } from '../styles/CategoryItem.styled'
import { Children } from '../styles/CategoryItems.styled'
import CategoryItemChild from './CategoryItemChild'
import CategoryItemContent from './CategoryItemContent'
import Checkbox from './Checkbox'

const Parent = ({title, icon, children, isProductCategory}) => {

    const {theme} = useContext(Context)

    const childElements = children.map((item, index) =>{
      return(
            <CategoryItemChild 
            key={index} 
            data={item} 
            isProductCategory={isProductCategory}
            />
      )})

    const [displayChildElements, setDisplayChildElements] = useState(false)
    
    const toggleChilds = () => {
      setDisplayChildElements(prevState => !prevState)
    }
    const openRoute = () => {

    }

    const handleClick = () => {
      if(isProductCategory){
        return children.length ? toggleChilds : ''
      }
      else{
        return children.length ? toggleChilds : openRoute
      }
    }
  return (
    <>
        
        {
          isProductCategory ?
          <StyledParent 
          onClick={children.length ? toggleChilds : openRoute} 
          theme={theme}
          > 
            {
              children.length ? 
              <CategoryItemContent 
              icon={icon} 
              title={title} 
              displayChildElements={displayChildElements}
              children={children}
              />: 
              <Checkbox />
            }
          </StyledParent> :
          <StyledParent 
          onClick={ children.length ? toggleChilds : openRoute} 
          theme={theme}> 
            <CategoryItemContent 
            icon={icon} 
            title={title} 
            displayChildElements={displayChildElements} 
            children={children}
            />
          </StyledParent>
        }

        <Children display={displayChildElements ? 1 : 0}>
            {childElements}
        </Children>
    </>
  )
}

export default Parent