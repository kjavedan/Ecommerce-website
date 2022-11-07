import React, { useContext } from 'react'
import {StyledFastLinks, StyledFastLinksContainer} from './styles/FastLinks.styled'
import {AiOutlineLink} from 'react-icons/ai'
import Link from './Link'
import { Context } from '../context/uiContext'
import {nanoid} from 'nanoid'

const FastLinks = ({links}) => {

    const {theme} = useContext(Context)

    const linkElements = links.map(link => <Link key={nanoid()} title={link.title} icon={link.icon} />) 
    
  return (
    <StyledFastLinks theme={theme}>
        <AiOutlineLink style={{fontSize: '1.5rem'}}/>
        <StyledFastLinksContainer>
            {linkElements}
        </StyledFastLinksContainer>
    </StyledFastLinks>
  )
}

export default FastLinks