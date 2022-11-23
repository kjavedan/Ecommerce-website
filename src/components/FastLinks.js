import React, { useContext } from 'react'
import {StyledFastLinks, StyledFastLinksContainer} from './styles/FastLinks.styled'
import {BsFilterLeft} from 'react-icons/bs'
import Link from './Link'
import { Context } from '../context/uiContext'
import {nanoid} from 'nanoid'

const FastLinks = ({links, isHomePage}) => {

    const {theme} = useContext(Context)

    const linkElements = links.map(link => <Link key={nanoid()} title={link.title} icon={link.icon} />) 
    
  return (
    <StyledFastLinks theme={theme} isHomePage={isHomePage}>
        <BsFilterLeft style={{fontSize: '2.5rem'}}/>
        <StyledFastLinksContainer>
            {linkElements}
        </StyledFastLinksContainer>
    </StyledFastLinks>
  )
}

export default FastLinks