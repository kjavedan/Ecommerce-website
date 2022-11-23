import React from 'react'
import { StyledPageRoute, Link } from './styles/PageRoute.styled'
import '../assets/App.css'
import {BiChevronRight} from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'


const PageRoute = () => {
  
  let fullPath = [];

  const location = useLocation()

  const getPath = () => {
    const array = location.pathname.split('/')
    console.log(array)
    return location.pathname
  }
  console.log(getPath())

  const route = fullPath.map( item => item !== '' && <><BiChevronRight /><Link  to={getPath()}> {item}</Link> </>)
  
  console.log(route)

  return (
    <StyledPageRoute>
        <AiFillHome style={{marginRight:'.2rem'}} /><Link  to={'/'}>Home</Link>
        {route}
    </StyledPageRoute>
  )
}

export default PageRoute