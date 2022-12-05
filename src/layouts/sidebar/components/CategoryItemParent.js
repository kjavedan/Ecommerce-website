import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../context/uiContext'
import { StyledParent } from '../styles/CategoryItem.styled'
import { Children } from '../styles/CategoryItems.styled'
import CategoryItemChild from './CategoryItemChild'
import CategoryItemContent from './CategoryItemContent'
import Checkbox from './Checkbox'

const Parent = ({title, icon, children, isProductCategory}) => {

    const {theme, hideSidebarSmallScreen} = useContext(Context)

    const childElements = children.map((item, index) =>{
      return(
            <CategoryItemChild 
            key={index} 
            title={item} 
            parentTitle={title}
            isProductCategory={isProductCategory}
            />
      )})

    const [displayChildElements, setDisplayChildElements] = useState(false)

    const toggleChilds = () => {
      setDisplayChildElements(prevState => !prevState)
    }
    const openRoute = () => {
      
      
      
    }

    
  return (
    <>
        
        {
          isProductCategory ?
          <StyledParent 
          onClick={children.length ? toggleChilds : openRoute} 
          theme={theme}
          style={{cursor: 'default'}}
          > 
            {
              children.length ? 
              <CategoryItemContent 
              icon={icon} 
              title={title} 
              displayChildElements={displayChildElements}
              children={children}
              />
              : 
              <Checkbox
              icon={icon}
              title={title}
              />
            }
          </StyledParent> :
          children.length ? 
          <StyledParent 
            theme={theme}
            onClick={toggleChilds}
            > 
              <CategoryItemContent 
              icon={icon} 
              title={title} 
              displayChildElements={displayChildElements} 
              children={children}
              />
            </StyledParent>
            : 
            <Link 
            onClick={hideSidebarSmallScreen}
            style={{textDecoration: 'none'}} to={`/${title}`} > 
            <StyledParent 
              theme={theme}
              > 
                <CategoryItemContent 
                icon={icon} 
                title={title} 
                displayChildElements={displayChildElements} 
                children={children}
                />
              </StyledParent>
            </Link>
        }
        <Children display={displayChildElements ? 1 : 0}>
            {childElements}
        </Children>
    </>
  )
}

export default Parent