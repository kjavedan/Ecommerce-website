import React, { useContext, useState } from 'react'
import {StyledFastLinks, StyledFastLinksContainer} from './styles/FastLinks.styled'
import {BsFilterLeft} from 'react-icons/bs'
import Link from './Link'
import { Context } from '../context/uiContext'
import {nanoid} from 'nanoid'

const FastLinks = ({links, isHomePage}) => {

    const {theme, toggleSidebar} = useContext(Context)

    const [smallScreen, setSmallScreen] = useState(false)

    const linkElements = links.map(link => <Link key={nanoid()} title={link.title} icon={link.icon} />) 
    
  return (
    <StyledFastLinks theme={theme} isHomePage={isHomePage}>
           {smallScreen ? <h4>Sorted by:</h4> : <span onClick={toggleSidebar} style={{borderRight:'2px solid lightgray', paddingRight:'.5rem'}}><BsFilterLeft style={{fontSize:'1.8rem', paddingRight:'.2rem'}} /> Filters </span>}
        <StyledFastLinksContainer>
            {linkElements}
        </StyledFastLinksContainer>
    </StyledFastLinks>
  )
}

export default FastLinks