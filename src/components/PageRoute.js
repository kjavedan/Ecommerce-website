import React from 'react'
import { StyledPageRoute, LinkStyles } from './styles/PageRoute.styled'
import '../assets/App.css'
import {BiChevronRight} from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const PageRoute = () => {

  
  return (
    <StyledPageRoute>
        <Link style={LinkStyles} to={'/'}><AiFillHome style={{color:'gray'}} /> Home</Link>
    </StyledPageRoute>
  )
}

export default PageRoute