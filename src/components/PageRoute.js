import React from 'react'
import { StyledPageRoute, Link } from './styles/PageRoute.styled'
import '../assets/App.css'
import {BiChevronRight} from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'


const PageRoute = () => {

  let fullPath = [];

  const usePath = () => {
    const location = useLocation()
    console.log(location.pathname)
    fullPath = location.pathname.split('/')
  }
  usePath()

  const route = fullPath.map( item => item !== '' && <><BiChevronRight /><Link  to={''}> {item}</Link> </>)
    

  return (
    <StyledPageRoute>
        <AiFillHome style={{marginRight:'.2rem'}} /><Link  to={'/'}>Home</Link>
        {route}
    </StyledPageRoute>
  )
}

export default PageRoute