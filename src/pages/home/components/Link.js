import React, { useContext } from 'react'
import { Context } from '../../../context/uiContext'
import {StyledLink} from '../styles/Link.styled'

const Link = ({title, icon}) => {
  
  const {theme} = useContext(Context)
  
  return (
    <StyledLink theme={theme}>
        <div>{icon}</div>
        <span>{title}</span>
    </StyledLink>
  )
}

export default Link