import React, { useContext, useEffect, useState } from 'react'
import {StyledFastLinks, StyledFastLinksContainer} from './styles/FastLinks.styled'
import {BsFilterLeft} from 'react-icons/bs'
import Link from './Link'
import { Context } from '../context/uiContext'
import {nanoid} from 'nanoid'

const FastLinks = ({links, isHomePage}) => {

    const {theme, toggleSidebar, smallScreen} = useContext(Context)


    useEffect(()=> {
      console.log(window.innerWidth)
    })

    const linkElements = links.map(link => <Link key={nanoid()} title={link.title} icon={link.icon} />) 
    
  return (
    <StyledFastLinks theme={theme} isHomePage={isHomePage}>
           {smallScreen
            ? 
            <span 
            onClick={toggleSidebar} 
            style={{borderRight:'2px solid lightgray', paddingRight:'.5rem'}}>
              <BsFilterLeft style={{fontSize:'1.8rem', paddingRight:'.2rem'}} />
               Filters 
            </span> :
            <h4>Sorted by:</h4> }
        <StyledFastLinksContainer>
            {linkElements}
        </StyledFastLinksContainer>
    </StyledFastLinks>
  )
}

export default FastLinks