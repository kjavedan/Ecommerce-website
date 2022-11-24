import React, { useState } from 'react'
import { StyledPageRoute, Link } from './styles/PageRoute.styled'
import '../assets/App.css'
import {BiChevronRight} from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'


const PageRoute = () => {

  let fullPath = [];

  const location = useLocation()

  const navigate = useNavigate()


  const usePath = () => {
    fullPath = location.pathname.split('/')
  }
  usePath()

  const handleClick = (e, index) => {
    let url;
    if(index === 1){
      url = '/' + fullPath[1]
    }
    else if(index === 2){
      url = '/'+ fullPath[1] + '/' + fullPath[2]
    }
    else if(index === 3){
      url = '/'+ fullPath[1] + '/' + fullPath[2] + '/' + fullPath[3]
    }
    navigate(url)
  }

  const route = fullPath.map( (item, index) => {
    console.log(item.replace('%20', ' '))
    if(item !== ''){
      return (
        <div
         key={nanoid()}
         onClick={(e)=>handleClick(e, index)}
         ><BiChevronRight /><Link > {item.replace('%20', ' ')}</Link> 
         </div>
      )
    }
  })
  

  return (
    <StyledPageRoute>
        <AiFillHome style={{marginRight:'.2rem'}} /><Link  to={'/'}>Home</Link>
        {route}
    </StyledPageRoute>
  )
}

export default PageRoute